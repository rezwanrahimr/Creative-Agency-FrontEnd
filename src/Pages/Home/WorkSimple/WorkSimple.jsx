// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./WorkSimple.scss";
import { Autoplay, Pagination, Navigation } from "swiper";
import carousel1 from "../../../assets/images/carousel-1.png";
import carousel2 from "../../../assets/images/carousel-2.png";
import carousel3 from "../../../assets/images/carousel-3.png";
import carousel4 from "../../../assets/images/carousel-4.png";
import carousel5 from "../../../assets/images/carousel-5.png";
const WorkSimple = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default WorkSimple;
