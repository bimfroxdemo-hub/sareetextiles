import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  const banners = [
    "https://i.pinimg.com/1200x/d4/d7/07/d4d7079f4edd6eb0cbaaf135dff25d14.jpg",
    "https://i.pinimg.com/736x/9e/d2/e9/9ed2e98ec2fc7baee49ff69d0b93594a.jpg",
    "https://i.pinimg.com/1200x/aa/20/30/aa20306d915c3470188230f1ad2c8a60.jpg",
  ];


  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="heroSwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[220px] sm:h-[320px] md:h-[450px] lg:h-[650px] xl:h-[720px] overflow-hidden">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;