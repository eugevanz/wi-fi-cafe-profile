import Pricing from "./Pricing";

function UnderScreenTabBar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`absolute flex flex-col items-center gap-20 max-w-full container md:p-32 bg-gray-800 transition-all duration-700 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-100 opacity-0"
      }`}
    >
      <div id="myTabContent">
        <div
          className="p-4 hidden"
          id="Pricing"
          role="tabpanel"
          aria-labelledby="Pricing-tab"
        >
          <Pricing setIsOpen={setIsOpen} />
        </div>
        <div
          className="p-4"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Dashboard tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
        <div
          className="p-4 hidden"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classNamees to control the
            content visibility and styling.
          </p>
        </div>
        <div
          className="p-4 hidden"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Contacts tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
}
export default UnderScreenTabBar;
