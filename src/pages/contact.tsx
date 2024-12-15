import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import TextInput from "@/components/ui/TextInput";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://s3.ap-south-1.amazonaws.com/caayushandco.com/home_building.jpg")',
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

          <div className="mt-12 max-w-md">
            <h3 className="text-xl mb-4">Contact Us</h3>
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
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Get In Touch
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
