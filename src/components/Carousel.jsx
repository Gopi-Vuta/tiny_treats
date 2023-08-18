import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  A11y,
  Autoplay,
} from "swiper/modules";

export default function Carousel() {
  const photos = [
    // "./assets/images/gift2.jpg",
    // "./assets/images/gift1.jpg",
    // "./assets/images/gift2.jpg",
    // "./assets/images/gift1.jpg",
    // "./assets/images/gift2.jpg",
    {
      title: "Engagement",
      img: "https://images.pexels.com/photos/7469387/pexels-photo-7469387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Birthday",
      img: "https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Anniversary",
      img: "https://images.pexels.com/photos/6213729/pexels-photo-6213729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Baby Shower",
      img: "https://images.pexels.com/photos/6213739/pexels-photo-6213739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "House Warming",
      img: "https://images.pexels.com/photos/6213729/pexels-photo-6213729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <section className="flex justify-center items-center pb-7 relative">
      <div className="md:w-[60rem] w-[44rem]">
        <Swiper
          style={{ overflowY: "initial" }}
          modules={[EffectCoverflow, Pagination, Navigation, A11y, Autoplay]}
          effect={"coverflow"}
          loop={true}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          navigation
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          }}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          className="coverflow"
        >
          {photos.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="md:h-40 md:w-40 h-32 w-32 absolute -top-2 -left-2 overflow-hidden
                before:absolute before:top-0 before:right-0 before:border-4 before:-z-10 before:border-blue-500
                after:absolute after:bottom-0 after:left-0 after:border-4 after:-z-10 after:border-blue-500
                "
                >
                  <div
                    className="absolute md:-left-14 -left-16 md:top-[38px] top-[20px] w-60 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 py-3
                  text-center shadow-md -rotate-45 text-white"
                  >
                    {item.title}
                  </div>
                </div>
                <img
                  src={item.img}
                  alt={`image` + index}
                  className="rounded-lg"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
