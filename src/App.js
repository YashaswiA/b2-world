import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import Pricing from "./Pages/Pricing/Pricing";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Webdev from "./Pages/Webdev/Webdev";
import Appdev from "./Pages/Appdev/Appdev";
import Digitalmarket from "./Pages/Digitalmarket/Digitalmarket";
import SEO from "./Pages/SEO/SEO";
import Branding from "./Pages/Branding/Branding";
import Aiml from "./Pages/Aiml/Aiml";
import Career from "./Pages/Career/Career";
import JobPage from "./Pages/JobPage/JobPage";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/webdev" element={<Webdev />} />
        <Route path="/appdev" element={<Appdev />} />
        <Route path="/digitalmarketing" element={<Digitalmarket />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/aiml" element={<Aiml />} />
        <Route path='job' element = {<JobPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
