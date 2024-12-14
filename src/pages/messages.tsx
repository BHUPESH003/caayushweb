import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

interface Message {
  fullName: string;
  email: string;
  message: string;
  timestamp: string;
}

function MessageCard({ message }: { message: Message }) {
  const date = new Date(message.timestamp);
  const formattedDate = date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {message.fullName}
        </CardTitle>
        <p className="text-sm text-gray-500">{message.email}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{message.message}</p>
        <p className="text-xs text-gray-500 mt-2">{formattedDate}</p>
      </CardContent>
    </Card>
  );
}

export function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/messages`,
          {
            headers: {
              Authorization: `${token}`, // Set the Authorization header
            },
          }
        );

        setMessages(response.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          navigate("/");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Implement logout logic here (e.g., clear token from localStorage)
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex-grow p-8">
        <div className="flex justify-end">
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center h-[400px]">
                <Icons.spinner className="h-8 w-8 animate-spin" />
              </div>
            ) : (
              <ScrollArea className="h-[600px] pr-4">
                {messages.length > 0 ? (
                  messages.map((message, index) => (
                    <MessageCard key={index} message={message} />
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No messages found.
                  </p>
                )}
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
