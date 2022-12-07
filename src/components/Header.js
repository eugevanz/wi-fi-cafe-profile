function Header() {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row container items-center px-10 mx-auto m-24">
        <div className="flex flex-col gap-8 md:w-1/2 lg:w-1/3">
          <p className="max-w-sm text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </p>
          <p className="max-w-sm text-center text-gray-500 md:text-left">
            WiFi Cafe makes it simpler for everyone on every device to plan
            their day-to-day while keeping the larger life goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#toggle"
              className="p-2 px-6 text-gray-100 bg-red-500 hover:bg-red-300 rounded-full baseline"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/3">
          <img
            src={`${process.env.PUBLIC_URL}/images/Devices.png`}
            alt="devices"
          />
        </div>
      </div>
    </section>
  );
}
export default Header;
