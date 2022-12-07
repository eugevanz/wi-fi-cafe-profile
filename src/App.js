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
          <div className="p-2">
            <img
              src={`${process.env.PUBLIC_URL}/icons/wifi-solid.svg`}
              alt="logo"
              width="34"
              height="34"
            />
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
              AboutUs
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
            className="hidden md:block p-2 px-6 text-cyan-100 bg-red-500 hover:bg-red-300 rounded-full baseline"
          >
            Get Started
          </a>
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
