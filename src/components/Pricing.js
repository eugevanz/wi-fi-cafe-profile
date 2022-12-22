function Pricing({ isOpen, setIsOpen }) {
  return (
    <section
      className={`w-screen h-screen scale-${
        isOpen ? "100" : "0"
      } absolute z-40 transition-all duration-300 ease-in-out`}
    >
      <table
        className="border-separate border-spacing-2 p-6 rounded"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <caption className="p-4 text-left w-[512px] text-sm">
          The prices listed are valid and fixed until all data has been depleted
          by the client. If the client does not use all of the data before
          logging off, they may continue to use the remaining data when they log
          back on to the site.
        </caption>
        <thead>
          <tr>
            <th className="border border-slate-600 p-2">Tariff</th>
            <th className="border border-slate-600 p-2">Price</th>
            <th className="border border-slate-600 p-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600 p-2">1GB</td>
            <td className="border border-slate-600 p-2">ZAR 20</td>
            <td className="border border-slate-600 p-2">Until Used</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">2GB</td>
            <td className="border border-slate-600 p-2">ZAR 30</td>
            <td className="border border-slate-600 p-2">Until Used</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">3GB</td>
            <td className="border border-slate-600 p-2">ZAR 40</td>
            <td className="border border-slate-600 p-2">Until Used</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">4GB</td>
            <td className="border border-slate-600 p-2">ZAR 60</td>
            <td className="border border-slate-600 p-2">Until Used</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">6GB</td>
            <td className="border border-slate-600 p-2">ZAR 70</td>
            <td className="border border-slate-600 p-2">Until Used</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">8GB</td>
            <td className="border border-slate-600 p-2">ZAR 80</td>
            <td className="border border-slate-600 p-2">Until Used</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">10GB</td>
            <td className="border border-slate-600 p-2">ZAR 100</td>
            <td className="border border-slate-600 p-2">Until Used</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default Pricing;
