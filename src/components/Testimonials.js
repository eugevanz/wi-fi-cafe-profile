import { motion } from "framer-motion";
import GetStarted from "./GetStarted";

function Testimonials({ scrollToEmail }) {
  return (
    <motion.section layout="position">
      <div className="max-w-6xl px-5 mx-auto text-center">
        <p className="text-2xl font-bold text-center">
          What are they saying about us?
        </p>
        <div className="flex flex-col mt-24 md:flex-row md:gap-6">
          <div className="flex flex-col items-center p-6 gap-6 rounded-lg bg-cyan-50 mb-16 md:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/images/prince-akachi-J1OScm_uHUQ-unsplash.jpg`}
              alt="user"
              className="w-16 -mt-14 rounded-full"
            />
            <p className="text-lg font-bold">Anisha Li</p>
            <p className="text-sm text-gray-500">
              "Whenever I am out and about and need to get some work done or
              just want to check my email, I know that I can rely on it to keep
              me connected. It is fast, reliable, and always available when I
              need it. I would highly recommend it to anyone who needs to stay
              connected on the go."
            </p>
          </div>
          <div className="flex flex-col items-center p-6 gap-6 rounded-lg bg-cyan-50 mb-16 md:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/images/philip-martin-5aGUyCW_PJw-unsplash.jpg`}
              alt="user"
              className="w-16 -mt-14 rounded-full"
            />
            <p className="text-lg font-bold">Phllip Martin</p>
            <p className="text-sm text-gray-500">
              "The connection is always fast and reliable, and it has allowed me
              to stay connected on the go. I highly recommend using Wi-Fi Cafe."
            </p>
          </div>
          <div className="flex flex-col items-center p-6 gap-6 rounded-lg bg-cyan-50 mb-16 md:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg`}
              alt="user"
              className="w-16 -mt-14 rounded-full"
            />
            <p className="text-lg font-bold">Joseph Gonzalez</p>
            <p className="text-sm text-gray-500">
              "The connection is always strong and reliable, which allows me to
              have smooth and efficient meetings. I have never had any issues
              with connectivity or quality, and I am able to conduct meetings
              just as if I was in the office. "
            </p>
          </div>
        </div>
        <div className="mt-2 mb-16">
          <GetStarted scrollToEmail={scrollToEmail} />
        </div>
      </div>
    </motion.section>
  );
}
export default Testimonials;
