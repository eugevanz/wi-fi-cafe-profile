function Pricing({ setIsOpen }) {
  return (
    <div className="flex flex-col gap-4 absolute origin-top-right mt-6 py-2 bg-white rounded shadow-xl z-10 w-max">
      <a className="ml-auto m-4" href="#close" onClick={() => setIsOpen(false)}>
        <svg
          className="h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
      </a>
      <div className="max-w-xl p-4">
        The prices listed are valid and fixed until all data has been depleted
        by the client. If the client does not use all of the data before logging
        off, they may continue to use the remaining data when they log back on
        to the site.
      </div>
      <table className="border-separate border-spacing-2 mx-2">
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
    </div>
  );
}
export default Pricing;
