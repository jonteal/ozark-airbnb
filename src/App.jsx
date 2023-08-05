import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navigation from "./pages/navigation/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Rentals from "./pages/rentals/Rentals";
import Management from "./pages/management/Management";
import Faq from "./pages/faq/Faq";
import Reserve from "./pages/reserve/Reserve";
import NotFound from "./pages/notFound/NotFound";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="rentals" element={<Rentals />} />
            <Route path="management" element={<Management />} />
            <Route path="reserve" element={<Reserve />} />
            <Route path="faq" element={<Faq />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
