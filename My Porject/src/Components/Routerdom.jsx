
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Global from "./Global";
import App1 from "./about";
import Use from "./Useeffect";
import Contact from "./contact";
import Navigationbar from "./Navigationbar";
const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigationbar />} >
        <Route path="/global" element={<Global />} />
        <Route path="/about" element={<App1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use" element={<Use />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
