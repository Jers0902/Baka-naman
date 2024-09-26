import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import References from "./pages/References";
import Project from "./pages/Project";

export default function App() {
  return (
    <div className="font-roboto ">
      <BrowserRouter>
        <Routes>
          <Route index element={<Mainpage />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
