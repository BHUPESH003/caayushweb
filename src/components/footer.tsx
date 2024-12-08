import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            AYUSH AHUJA <br />& CO.
          </h3>
          <div className="mt-4">
            <h4 className="text-lg mb-2">Join The Success!</h4>
            <input
              type="email"
              placeholder="Email Now"
              className="bg-transparent border border-white/20 px-4 py-2 w-full max-w-xs"
            />
          </div>
        </div>

        <div>
          <h4 className="text-lg mb-4">Info</h4>
          <p>+91 955 514 3123</p>
          <p>
            <a href="mailto:caayushahuja@gmail">caayushahuja@gmail.com</a>
          </p>
          <div className="mt-4">
            <h4 className="text-lg mb-2">Address</h4>
            <p>Building No. 2, next to Genesis</p>
            <p>Hospital, Sector 85, Gurugram,</p>
            <p>Haryana 122004</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg mb-4">Follow</h4>
          <div className="space-y-2">
            <a
              target="_blank"
              href="https://linkedin.com/in/bhupesh-1b1258220/"
              className="block hover:text-gray-300"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://facebook.com/ydv.bhupesh"
              className="block hover:text-gray-300"
            >
              Facebook
            </a>
            <a
              target="_blank"
              href="https://instagram.com/ydv.bhupesh"
              className="block hover:text-gray-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
