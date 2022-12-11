import CallToAction from "./components/CallToAction";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="p-2 flex items-center gap-1">
            <img
              src={`${process.env.PUBLIC_URL}/images/wi-fi-cafe-logo.png`}
              alt="logo"
              className="h-6"
            />
            <div className="text-2xl font-bold text-orange-500">Wi-Fi Cafe</div>
          </div>
          <div className="md:flex hidden gap-6">
            <a
              href="#Pricing"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              Pricing
            </a>
            <a
              href="#Product"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              Product
            </a>
            <a
              href="#AboutUs"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              About
            </a>
            <a
              href="#Careers"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              Careers
            </a>
            <a
              href="#Community"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              Community
            </a>
          </div>
          <a
            href="#toggle"
            className="hidden md:block p-2 px-6 text-cyan-100 bg-orange-500 hover:bg-orange-300 rounded-full baseline"
          >
            Get Started
          </a>
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
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center self-end hidden py-8 mt-10 gap-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a
              href="#Pricing"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              Pricing
            </a>
            <a
              href="#Product"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              Product
            </a>
            <a
              href="#AboutUs"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              About
            </a>
            <a
              href="#Careers"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              Careers
            </a>
            <a
              href="#Community"
              alt="menu-item"
              className="hover:text-cyan-600 font-medium "
            >
              Community
            </a>
          </div>
        </div>
      </nav>

      <Header></Header>
      <Services></Services>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </div>
  );
}

export default App;
