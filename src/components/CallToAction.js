function CallToAction() {
  return (
    <section className="bg-red-500">
      <div className="container flex flex-col items-center justify-center px-10 py-32 mx-auto gap-12 md:flex-row">
        <p className="text-5xl font-bold leading-tight text-center text-cyan-50 md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works, today!
        </p>
        <a
          href="#toggle"
          className="p-2 px-6 text-red-500 bg-cyan-50 shadow-2xl hover:bg-red-300 rounded-full baseline"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
export default CallToAction;
