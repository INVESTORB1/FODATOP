import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headerbar from "./component/headerbar/Headerbar";
import NavBar from "./component/headerbar/NavBar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Admission from "./component/pages/Admission";
import Contact from "./component/pages/Contact";
import Fodatop from "./component/pages/Fodatop";
import Gallery from "./component/pages/Gallery";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App text-red-500">
        <Headerbar />
        <NavBar />
        <Routes>
          {/* <Route index element={<Dashboard/>}/> */}
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fodatop" element={<Fodatop />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
