import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";


const Gallery = ({ img }) => {

  return (
    <div className="mb-16">
      <h1 className="text-center mt-12 mb-6 lg:my-12 font-bold lg:text-5xl text-2xl">Hero Toy Gallery</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          img.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <img className="border-8 border-sky-500 rounded-xl w-full h-full p-3" src={item.image
                } alt="" />
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  );
};

export default Gallery;