import "./testimonials.css";
import client1 from "../../assets/avatar1.jpg";
import client2 from "../../assets/avatar2.jpg";
import client3 from "../../assets/avatar3.jpg";
import client4 from "../../assets/avatar4.jpg";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="container testimonials__container"
      >
        {/* 1st client */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client1} alt="" />
          </div>
          <h5 className="client__name">HR Hasan</h5>
          <small className="client__review">
            I am extremely satisfied with the work. I am so happy with the
            result. I will work with them again and recommend them to my
            friends.
          </small>
        </SwiperSlide>
        {/* 2nd client */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client2} alt="" />
          </div>
          <h5 className="client__name">HR Hasan</h5>
          <small className="client__review">
            I am extremely satisfied with the work. I am so happy with the
            result. I will work with them again and recommend them to my
            friends.
          </small>
        </SwiperSlide>
        {/* 3rd client */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client3} alt="" />
          </div>
          <h5 className="client__name">HR Hasan</h5>
          <small className="client__review">
            I am extremely satisfied with the work. I am so happy with the
            result. I will work with them again and recommend them to my
            friends.
          </small>
        </SwiperSlide>
        {/* 4th client */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={client4} alt="" />
          </div>
          <h5 className="client__name">HR Hasan</h5>
          <small className="client__review">
            I am extremely satisfied with the work. I am so happy with the
            result. I will work with them again and recommend them to my
            friends.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
