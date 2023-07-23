import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // console.log("product is", product.images);
  return product.name?(
    <>
      <div className="head">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={4}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {product.images.map((a) => (
            <SwiperSlide>
              <img src={a} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="additional-imgs">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {product.images.map((a) => (
            <SwiperSlide>
              <img src={a} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  ):null;
}
