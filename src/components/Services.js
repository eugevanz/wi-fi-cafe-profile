function Services() {
  return (
    <section>
      <div className="flex flex-col gap-8 md:flex-row container py-24 px-10 mx-auto m-24">
        <div className="flex flex-col gap-8 md:w-1/2">
          <p className="max-w-md text-2xl font-bold text-center md:text-3xl md:text-left">
            How are we so different?
          </p>
          <p className="max-w-md text-center text-gray-500 md:text-left pb-10">
            All the internet connectivity we all need in one convenient place,
            without the complexity. Our wireless accessibility is tailor-made
            for modern people with modern tools.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/images/social-media-amico-962copy.png`}
            alt="devices"
          />
        </div>
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-2">
            <div className="rounded-full bg-red-200 md:bg-transparent">
              <div className="flex items-center gap-3 p-1 pr-4">
                <div className="px-4 py-2 text-white rounded-full bg-red-500">
                  01
                </div>
                <p className="text-base font-medium text-gray-900">
                  Track company-wide progress
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-center md:text-left">
              All the internet connectivity we all need in one convenient place,
              without the complexity. Our wireless accessibility is tailor-made
              for modern people with modern tools.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full bg-red-200 md:bg-transparent">
              <div className="flex items-center gap-3 p-1 pr-4">
                <div className="px-4 py-2 text-white rounded-full bg-red-500">
                  01
                </div>
                <p className="text-base font-medium text-gray-900">
                  Track company-wide progress
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-center md:text-left">
              All the internet connectivity we all need in one convenient place,
              without the complexity. Our wireless accessibility is tailor-made
              for modern people with modern tools.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full bg-red-200 md:bg-transparent">
              <div className="flex items-center gap-3 p-1 pr-4">
                <div className="px-4 py-2 text-white rounded-full bg-red-500">
                  01
                </div>
                <p className="text-base font-medium text-gray-900">
                  Track company-wide progress
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-center md:text-left">
              All the internet connectivity we all need in one convenient place,
              without the complexity. Our wireless accessibility is tailor-made
              for modern people with modern tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
