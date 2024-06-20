
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Global from "./Global";
import App1 from "./about";
import Contact from "./contact";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Global />} />
        <Route path="/about" element={<App1 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
