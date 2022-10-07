import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Service from "./components/services/Service";
import Social from "./components/socials/Social";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Social />
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
