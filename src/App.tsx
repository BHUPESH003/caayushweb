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
import { MessagesPage } from "./pages/messages";
import { LoginPage } from "./pages/login";

const isAuthenticated = () => !!localStorage.getItem("token");

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
}
({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/team" element={<TeamPage />} />{" "}
          <Route path="/login" element={<LoginPage />} />{" "}
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <MessagesPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
