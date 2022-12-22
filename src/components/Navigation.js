import { motion } from "framer-motion";
import { useState } from "react";
import Pricing from "./Pricing";

function Navigation({ scrollToServices }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:flex flex-wrap hidden gap-6 container mx-32">
      <motion.div layout onClick={() => setIsOpen((prevState) => !prevState)}>
        <motion.h4
          layout="position"
          className="hover:text-cyan-600 font-medium focus:outline-none"
        >
          Pricing
        </motion.h4>
        {isOpen && <Pricing />}
      </motion.div>
      <motion.div>
        <motion.h4
          layout="position"
          className="hover:text-cyan-600 font-medium focus:outline-none"
          onClick={scrollToServices}
        >
          Product
        </motion.h4>
      </motion.div>
      <motion.div>
        <motion.h4
          layout="position"
          className="hover:text-cyan-600 font-medium focus:outline-none"
        >
          About
        </motion.h4>
      </motion.div>
      <motion.div>
        <motion.h4
          layout="position"
          className="hover:text-cyan-600 font-medium focus:outline-none"
        >
          Careers
        </motion.h4>
      </motion.div>
      <motion.div>
        <motion.h4
          layout="position"
          className="hover:text-cyan-600 font-medium focus:outline-none"
        >
          Community
        </motion.h4>
      </motion.div>
    </div>
  );
}
export default Navigation;
