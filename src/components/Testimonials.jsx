import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";

export default function Testimonials() {
  const photos = [
    // "./assets/images/gift2.jpg",
    // "./assets/images/gift1.jpg",
    // "./assets/images/gift2.jpg",
    // "./assets/images/gift1.jpg",
    // "./assets/images/gift2.jpg",
    {
      name: "Ayushi",
      place: "Kozhikode",
      comment:
        "Loved the hamper 😍, it looks so beautfiul. Thank you so much for accepting the order and delivering it rightly in short notice ❤️",
    },
    {
      name: "Rishi",
      place: "Hyderabad",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique, neque dolore alias, velit magni quisquam pariatur cupiditate nihil corrupti possimus sed consequatur quidem cum, incidunt qui libero voluptatibus ratione.",
    },
    {
      name: "Swapna",
      place: "Vizag",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta enim unde, modi deserunt sunt debitis iusto magni, minus maxime, praesentium maiores sequi perspiciatis ducimus odio itaque error aspernatur facilis.",
    },
    {
      name: "Anushka",
      place: "Jodhpur",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure cumque quod, est omnis veritatis quasi pariatur, aut delectus maiores eveniet explicabo! Recusandae consequatur neque accusantium modi maiores dolor dignissimos?",
    },
    {
      name: "Virat",
      place: "Bengaluru",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum beatae tempora voluptatem earum minus eligendi. Tempore incidunt quod quae doloremque quo? Cum eum nemo ea doloribus sequi autem aut debitis?",
    },
  ];
  return (
    <section className="flex justify-center items-center py-7 relative">
      <img
        className="w-2/3 absolute left-0 right-0 mx-auto -top-[0%]"
        src="./assets/images/phoneFrame.png"
        alt="phone background"
      />
      <div className="max-w-5xl relative">
        <Swiper
          // style={{ overflowY: "initial" }}
          modules={[EffectCoverflow, Navigation]}
          effect={"coverflow"}
          loop={true}
          slidesPerView={1}
          navigation
          centeredSlides={true}
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
                <div className="px-40 mt-14 flex flex-col items-center gap-3">
                  <div className="text-center">{item.name}</div>
                  <div className="w-48 text-left h-72">
                    &ldquo;{item.comment}&rdquo;
                  </div>
                  <div className="">-{item.place}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
