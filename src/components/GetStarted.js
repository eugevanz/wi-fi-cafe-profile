function GetStarted({ scrollToEmail }) {
  return (
    <a
      href="#toggle"
      className="hidden md:block p-2 px-6 text-cyan-100 text-center bg-orange-500 min-w-max hover:bg-orange-300 rounded-full baseline"
      onClick={scrollToEmail}
    >
      Get Started
    </a>
  );
}
export default GetStarted;
