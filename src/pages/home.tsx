// import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import AyushImg from "../assets/Ayush_Ahuja.jpeg";
import TextInput from "@/components/ui/TextInput";
import { useState } from "react";
import axios from "axios";

export function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const payload = {
      fullName: name,
      email,
      message,
    };
    console.log(payload);
    console.log(import.meta.env.VITE_API_URL);
    try {
      // Send the form data to the server
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/submit`,
        payload
      );

      // Handle successful response
      console.log("Submit Response:", response.data);
      alert(response.data.message);
      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      // Handle errors
      console.error(
        "Error submitting data:",
        error.response?.data || error.message
      );
      alert("Failed to submit the form. Please try again.");
    }
  };

  const services = [
    {
      title: "Direct Taxes",
      description: "Expert guidance on complex tax laws and regulations.",
      icon: "📊",
    },
    {
      title: "Indirect Taxes",
      description: "Navigate the evolving landscape of indirect taxation.",
      icon: "💰",
    },
    {
      title: "Advisory",
      description: "Strategic financial advice for your business growth.",
      icon: "📈",
    },
    {
      title: "Business Start-up & Support",
      description: "Comprehensive assistance for new ventures.",
      icon: "🚀",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://caayushandco.s3.ap-south-1.amazonaws.com/assets/home_building.avif")',
            opacity: 0.5,
          }}
        />
        <div className="relative container mx-auto px-4 pt-32 md:pt-48">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Chartered Accountants
          </h1>
          <p className="text-xl mb-8">
            The destination for leaders who seek to change the world
          </p>
          <Button variant="outline" className="text-black border-white">
            Get in Touch
          </Button>

          <div className="mt-12 max-w-md">
            <h3 className="text-xl mb-4">Subscribe for Updates</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-white/20"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-white/20"
              />
              <TextInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your Message"
              />
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Ayush Ahuja & Co.?
              </h2>
              {/* <p className="text-gray-300">
                Choosing us at AA firm means partnering with a team of
                experienced professionals...
              </p> */}
            </div>
            <div className="bg-purple-600/10 p-8">
              <p className="text-gray-300">
                Choosing our CA firm means partnering with a team of
                experienced, reliable, and dedicated professionals who are
                committed to helping you navigate the complexities of finance
                and taxation. We pride ourselves on providing personalized
                solutions tailored to meet your unique business needs, ensuring
                compliance, and optimizing financial outcomes. With a strong
                track record of success across various industries, our experts
                offer a blend of technical expertise and proactive advice.
                Whether you're looking for assistance with tax planning,
                auditing, or business consulting, we focus on delivering clear,
                actionable insights that drive growth and protect your financial
                interests. Let us be your trusted advisor in achieving financial
                success with integrity and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">
                About Ayush Ahuja & Co.
              </h2>
              <p className="text-gray-300 mb-4">
                Ayush Ahuja & Co. is a leading chartered accountant firm
                dedicated to providing comprehensive financial services. With
                years of experience and a team of skilled professionals, we
                offer innovative solutions tailored to meet the unique needs of
                each client.
              </p>
              <p className="text-gray-300 mb-4">
                Our expertise spans across various domains including taxation,
                auditing, financial planning, and business advisory. We pride
                ourselves on our commitment to excellence, integrity, and client
                satisfaction.
              </p>
              <Link to="/who-we-are">
                <Button
                  variant="outline"
                  className="text-black border-white mt-4"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src={AyushImg}
                alt="Ayush Ahuja"
                className="rounded-lg shadow-lg"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-none">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/who-we-are">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Services Quote Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-4xl max-w-4xl mx-auto">
            "Striving for financial success requires resilience and
            determination. It's the commitment to overcome challenges that leads
            to lasting prosperity."
          </blockquote>
          <cite className="block mt-6">Ayush Ahuja & Co.</cite>
        </div>
      </section>
    </div>
  );
}
