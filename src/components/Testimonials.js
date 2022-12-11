function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl px-5 mx-auto text-center">
        <p className="text-2xl font-bold text-center">
          What are they saying about us?
        </p>
        <div className="flex flex-col mt-24 md:flex-row md:gap-6">
          <div className="flex flex-col items-center p-6 gap-6 rounded-lg bg-cyan-50 mb-16 md:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/icons/user-astronaut-solid.svg`}
              alt="face"
              className="w-16 -mt-14"
            />
            <p className="text-lg font-bold">Anisha Li</p>
            <p className="text-sm text-gray-500">
              "WiFi Cafe has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
          <div className="flex flex-col items-center p-6 gap-6 rounded-lg bg-cyan-50 mb-16 md:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/icons/user-astronaut-solid.svg`}
              alt="face"
              className="w-16 -mt-14"
            />
            <p className="text-lg font-bold">Anisha Li</p>
            <p className="text-sm text-gray-500">
              "WiFi Cafe has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
          <div className="flex flex-col items-center p-6 gap-6 rounded-lg bg-cyan-50 mb-16 md:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/icons/user-astronaut-solid.svg`}
              alt="face"
              className="w-16 -mt-14"
            />
            <p className="text-lg font-bold">Anisha Li</p>
            <p className="text-sm text-gray-500">
              "WiFi Cafe has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
        </div>
        <div className="mt-2 mb-16">
          <a
            href="#toggle"
            className="p-2 px-6 text-gray-100 bg-orange-500 hover:bg-orange-300 rounded-full baseline"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
