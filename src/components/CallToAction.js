import GetStarted from "./GetStarted";

function CallToAction({ scrollToEmail }) {
  return (
    <section className="bg-orange-700">
      <div className="flex flex-col container px-10 py-32 mx-auto gap-12">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <p className="text-5xl font-bold leading-tight text-center text-cyan-50 md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works, today!
          </p>
          <GetStarted scrollToEmail={scrollToEmail} />
        </div>
        <p className="text-cyan-50 md:w-2/3">
          Our vision is to focus on providing personalized and tailored services
          to meet the specific needs of each client. This includes conducting
          in-depth analyses of the client's particular needs and identifying
          areas for improvement. By creating custom programs and solutions based
          on these findings, we help clients to transform and improve their
          sales more effectively. Additionally, offering flexibility and
          affordability makes our services more accessible and attractive to
          clients. By prioritizing personalized and tailored services, we better
          meet the needs of our clients and help them to achieve their goals.
        </p>
      </div>
    </section>
  );
}
export default CallToAction;
