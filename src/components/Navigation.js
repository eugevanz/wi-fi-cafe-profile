import Pricing from "./Pricing";

function Navigation({ scrollToServices, isOpen, setIsOpen }) {
  return (
    <div className="md:flex justify-center items-center hidden gap-6 container mx-40">
      <div onClick={() => setIsOpen((prevState) => !prevState)}>
        <h4
          className={`hover:text-cyan-600 font-medium focus:outline-none ${
            isOpen && "text-3xl text-cyan-600"
          }`}
        >
          Pricing
        </h4>
        <Pricing isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div>
        <h4
          className="hover:text-cyan-600 font-medium focus:outline-none"
          onClick={scrollToServices}
        >
          Product
        </h4>
      </div>
      <div>
        <h4 className="hover:text-cyan-600 font-medium focus:outline-none">
          About
        </h4>
      </div>
      <div>
        <h4 className="hover:text-cyan-600 font-medium focus:outline-none">
          Careers
        </h4>
      </div>
      <div>
        <h4 className="hover:text-cyan-600 font-medium focus:outline-none">
          Community
        </h4>
      </div>
    </div>
  );
}
export default Navigation;
