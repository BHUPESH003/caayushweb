import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/navabar";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/home";
import { WhoWeArePage } from "./pages/who-we-are";
import { TeamPage } from "./pages/our-team";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/team" element={<TeamPage />} />{" "}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
