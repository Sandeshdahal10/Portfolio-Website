import { BrowserRouter,Routes,Route } from "react-router-dom";
import Homes from "./pages/Homes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        {/* <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

