import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Blogs from "./blogs/Blogs";
import About from "./about/About";
import Careers from "./careers/Careers";
import Services from "./services/Services";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}
export default App;
