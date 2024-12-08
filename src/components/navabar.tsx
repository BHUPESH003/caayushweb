import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Who We Are", path: "/who-we-are" },
    { title: "Our Services", path: "/services" },
    { title: "Learning Modules", path: "/learning" },
    { title: "Our Team", path: "/team" },
    { title: "Contact", path: "/contact" },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white text-xl font-semibold">
            AYUSH AHUJA <br />& CO.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Link to="/login">
              <Button variant="outline" className="text-black border-white">
                Log In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            style={{ zIndex: 100 }}
            onClick={handleClick}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button
                variant="outline"
                className="text-black border-white text-2xl"
              >
                Log In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
