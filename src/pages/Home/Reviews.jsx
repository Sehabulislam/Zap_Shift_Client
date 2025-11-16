import React, { use } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import comment from "../../assets/reviewQuote.png";
import review from "../../assets/customer-top.png";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Reviews = () => {
  const reviews = use(reviewsPromise);
  return (
    <div className="mt-10">
      <div className=" flex flex-col justify-center items-center text-[#03373D] text-center gap-4">
        <img src={review} alt="" className="w-45" />
        <h1 className="text-2xl md:text-3xl font-bold">
          What our customers are sayings
        </h1>
        <p className="text-sm md:text-md">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={[1]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="md:w-150 mx-auto mt-5"
      >
        {reviews.map((review) => (
          <SwiperSlide className="bg-white rounded-2xl p-5">
            <img src={comment} alt="" />
            <p>{review.review}</p>
            <h1 className="border border-dashed my-2 border-gray-400"></h1>
            <div className="flex items-center gap-2">
              <img
                src={review.user_photoURL}
                alt=""
                className="w-15 h-15 object-cover rounded-full mt-2"
              />
              <div className="">
                <h1 className="text-2xl font-bold">{review.userName}</h1>
                <h2>{review.user_email}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
