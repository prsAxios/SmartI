import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MoreInfo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const locations = [
    {
      logo: "tower1.png",
      title: "Corporate Office, Manufacturing Unit",
      address:
        "Bhumi World Industrial Park, Building No D-7, Units No 250, 251 & 252, Pimplas, Bhiwandi, Thane – 421302, Maharashtra, INDIA",
    },
    {
      logo: "tower2.png",
      title: "Corporate Office, Manufacturing Unit",
      address:
        "Bhumi World Industrial Park, Building No D-7, Units No 250, 251 & 252, Pimplas, Bhiwandi, Thane – 421302, Maharashtra, INDIA",
    },
    {
      logo: "tower3.png",
      title: "Corporate Office, Manufacturing Unit",
      address:
        "Bhumi World Industrial Park, Building No D-7, Units No 250, 251 & 252, Pimplas, Bhiwandi, Thane – 421302, Maharashtra, INDIA",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen bg-white p-4">
      {isMobile ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {locations.map((location, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col items-center text-center bg-white m-8 p-10 rounded-md w-96 mx-auto mt-28"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <div className="mb-8">
                  <img
                    src={location.logo}
                    alt="Logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-4">{location.title}</h2>
                <p className="text-lg text-gray-600">{location.address}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-wrap justify-center mt-28">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white m-8 p-10 rounded-md w-96"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className="mb-8">
                <img
                  src={location.logo}
                  alt="Logo"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{location.title}</h2>
              <p className="text-lg text-gray-600">{location.address}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
