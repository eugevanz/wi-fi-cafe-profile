import { useRef, useState } from "react";
import CallToAction from "./components/CallToAction";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Navigation from "./components/Navigation";

function App() {
  const getStarted = useRef(null);
  const product = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function scrollToServices() {
    product.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToEmail() {
    getStarted.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <nav className="relative container mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="p-2 flex-nowrap flex items-center gap-2 w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/wi-fi-cafe-logo.png`}
              alt="logo"
              className="h-6"
            />
            <div className="text-2xl font-bold text-orange-500">Wi-Fi Cafe</div>
          </div>
          <Navigation
            scrollToServices={scrollToServices}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <GetStarted scrollToEmail={scrollToEmail} />
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <svg
              className="h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </nav>
      <Header scrollToEmail={scrollToEmail} isOpen={isOpen} />
      <Services
        className="flex flex-col gap-8 md:flex-row container py-24 px-10 mx-auto m-24"
        ref={product}
      />
      <Testimonials scrollToEmail={scrollToEmail} />
      <CallToAction scrollToEmail={scrollToEmail} />
      <Footer className="bg-cyan-900" ref={getStarted} />
    </div>
  );
}

export default App;
