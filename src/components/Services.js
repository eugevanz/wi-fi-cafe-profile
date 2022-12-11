function Services() {
  return (
    <section>
      <div className="flex flex-col gap-8 md:flex-row container py-24 px-10 mx-auto m-24">
        <div className="flex flex-col gap-8 md:w-1/2">
          <p className="max-w-md text-2xl font-bold text-center md:text-3xl md:text-left">
            How are we so different?
          </p>
          <p className="max-w-md text-center text-gray-500 md:text-left pb-10">
            We focus on providing a seamless and reliable WIFI experience for
            large venue visitors. This includes investing in state-of-the-art
            WIFI infrastructure and technology to handle the high density and
            bandwidth demands of a large space such as a mall. By providing
            clear and easy-to-follow instructions for accessing the WIFI
            network, we dedicate a significant amount of our time to user
            experience. Additionally, we offer customer support and technical
            assistance to help address any issues or concerns that may arise
            during the experience. By focusing on providing a high-quality WIFI
            experience, mall visitors can fully engage with their favorite
            stores and share their experiences on social media.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/images/social-media-amico-962copy.png`}
            alt="devices"
          />
        </div>
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="flex flex-col gap-2">
            <div className="rounded-full bg-orange-200 md:bg-transparent">
              <div className="flex items-center gap-3 p-1 pr-4">
                <div className="px-4 py-2 text-white rounded-full bg-orange-500">
                  01
                </div>
                <p className="text-base font-medium text-gray-900">
                  Indoor WIFI solution
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-center md:text-left">
              We provide a seamless and personalized experience for mall
              visitors. This includes implementing advanced technology and
              infrastructure to support high-performance internet across the
              entire mall.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full bg-orange-200 md:bg-transparent">
              <div className="flex items-center gap-3 p-1 pr-4">
                <div className="px-4 py-2 text-white rounded-full bg-orange-500">
                  02
                </div>
                <p className="text-base font-medium text-gray-900">
                  Personalized and Location-Based
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-center md:text-left">
              By providing personalized and location-based promotions we help to
              improve guest engagement and increase conversion rates.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full bg-orange-200 md:bg-transparent">
              <div className="flex items-center gap-3 p-1 pr-4">
                <div className="px-4 py-2 text-white rounded-full bg-orange-500">
                  03
                </div>
                <p className="text-base font-medium text-gray-900">
                  New Revenue
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-center md:text-left">
              Additionally, offering network and service monetization can create
              new revenue streams for the mall.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full bg-orange-200 md:bg-transparent">
              <div className="flex items-center gap-3 p-1 pr-4">
                <div className="px-4 py-2 text-white rounded-full bg-orange-500">
                  04
                </div>
                <p className="text-base font-medium text-gray-900">
                  High-Quality Experience
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-center md:text-left">
              By focusing on providing a high-quality and personalized WIFI
              experience, mall visitors can fully engage with the mall and its
              offerings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
