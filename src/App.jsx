import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from "./pages/Homes.jsx";
import Project from "./pages/Project.jsx";
import AboutMe from "./pages/AboutMe.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Project />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
