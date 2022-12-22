import { motion } from "framer-motion";

function UnderScreenTabBar() {
  return (
    <motion.div
      layout
      className="flex flex-col gap-20 max-w-full container md:p-32 bg-gray-800"
    >
      <div className="p-2 flex items-center gap-1">
        <img
          src={`${process.env.PUBLIC_URL}/images/wi-fi-cafe-logo.png`}
          alt="logo"
          className="h-6"
        />
        <div className="text-2xl font-bold text-orange-500">Wi-Fi Cafe</div>
      </div>
      <div className="p-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          This is some placeholder content the{" "}
          <strong className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classNamees to control the content
          visibility and styling.
        </p>
      </div>
    </motion.div>
  );
}
export default UnderScreenTabBar;
