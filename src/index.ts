import { Hono } from "hono";
import { cors } from "hono/cors";
import { PrismaClient } from "@prisma/client/edge";

import { sign, verify } from "hono/jwt";

import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// Allow CORS
app.use("/*", cors());

// Helper function to get current IST time
const getISTTime = () => {
  return new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
};

// Route to handle the request (POST: Save Data)
app.post("/submit", async (ctx) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: ctx.env.DATABASE_URL,
    }).$extends(withAccelerate());

    // Parse the request body
    const { fullName, email, message } = await ctx.req.json();

    if (!fullName || !email || !message) {
      return ctx.json({ error: "Missing required fields" }, 400);
    }

    // Save the data to PostgreSQL using Prisma
    const newMessage = await prisma.message.create({
      data: {
        fullName,
        email,
        message,
        timestamp: new Date(), // Server stores UTC, frontend converts to IST if needed
      },
    });

    return ctx.json({
      success: true,
      message:
        "Your response has been recorder sucessfully and we will  connect with you shortly.",
      insertedId: newMessage.id,
      timestamp: getISTTime(), // Return IST timestamp in the response
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return ctx.json({ error: "Internal Server Error" }, 500);
  }
});

app.post("/login", async (ctx) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: ctx.env.DATABASE_URL,
    }).$extends(withAccelerate());

    console.log(ctx.req.json());

    const body = await ctx.req.json();

    const user = await prisma.User.findFirst({
      where: {
        email: body.username,
        password: body.password,
      },
    });

    if (!user) {
      ctx.status(403);
      return ctx.json({
        message: "Incorrect Creds",
      });
    }

    // Set token expiration to 1 hour
    const jwt = await sign(
      {
        id: user.id,
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // Current time + 1 hour in seconds
      },
      ctx.env.JWT_SECRET
    );

    ctx.status(200);
    return ctx.json({
      token: jwt,
      id: user.id,
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return ctx.json({ error: "Internal Server Error" }, 500);
  }
});

app.get("/messages", async (ctx) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: ctx.env.DATABASE_URL,
    }).$extends(withAccelerate());
    //only return messages if user is authenticated
    const token = ctx.req.header("Authorization");
    if (!token) {
      return ctx.json({ error: "No Token" }, 401);
    }
    const verifytoken = await verify(token, ctx.env.JWT_SECRET);
    if (!verifytoken) {
      return ctx.json({ error: "Unauthorized" }, 401);
    }
    const messages = await prisma.message.findMany();
    return ctx.json(messages);
  } catch (error) {
    console.error("Error handling request:", error);
    return ctx.json({ error: "Internal Server Error" }, 500);
  }
});
// Route to check server status (GET: Server Status)
app.get("/status", (ctx) => {
  try {
    return ctx.json({
      status: "OK",
      message: "Server is running smoothly",
      timestamp: getISTTime(), // Return IST timestamp
    });
  } catch (error) {
    console.error("Error checking server status:", error);
    return ctx.json(
      { status: "Error", message: "Unable to fetch status" },
      500
    );
  }
});

// Export the app for Cloudflare Workers
export default app;
