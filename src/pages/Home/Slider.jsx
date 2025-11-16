import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import { MdArrowOutward } from "react-icons/md";
const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showArrows
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      stopOnHover
      className="hover:cursor-pointer lg:h-[80vh]"
    >
      <div className="relative">
        <img src={banner1} className="lg:h-[80vh]" />
        <div className="absolute bottom-2 left-3 md:bottom-5 lg:bottom-7 md:left-10 lg:left-25 max-w-4xl text-start">
          <p className="lg:mb-5 text-sm lg:text-xl hidden lg:block">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className=" flex items-center">
            <button className="btn bg-[#CAEB66] rounded-full text btn-xs md:btn-md lg:p-5 md:text-lg">
              Track Your Parcel
            </button>
            <button className="bg-black text-white md:mr-2 btn btn-circle btn-xs md:btn-md">
              <MdArrowOutward size={35} />
            </button>
            <button className="btn btn-neutral btn-outline rounded-xl btn-xs md:btn-md lg:p-5 md:text-lg hover:text-white shadow-none ml-2">
              Be A Rider
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={banner2} className="lg:h-[80vh]" />
        <div className="absolute bottom-2 left-5 md:bottom-5 lg:bottom-7 md:left-10 lg:left-25 max-w-4xl text-start">
          <p className="lg:mb-5 text-sm lg:text-xl hidden lg:block">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className=" flex items-center">
            <button className="btn bg-[#CAEB66] rounded-full text btn-xs md:btn-md lg:p-5 md:text-lg">
              Track Your Parcel
            </button>
            <button className="bg-black text-white md:mr-2 btn btn-circle btn-xs md:btn-md">
              <MdArrowOutward size={35} />
            </button>
            <button className="btn btn-neutral btn-outline rounded-xl btn-xs md:btn-md lg:p-5 md:text-lg hover:text-white shadow-none ml-2">
              Be A Rider
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={banner3} className="lg:h-[80vh]" />
        <div className="absolute bottom-4 left-4 md:bottom-9 lg:bottom-15 md:left-10 lg:left-25 max-w-4xl text-start">
          <p className="lg:mb-5 text-sm lg:text-xl hidden lg:block">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className=" flex items-center">
            <button className="btn bg-[#CAEB66] rounded-full text btn-xs md:btn-md lg:p-5 md:text-lg">
              Track Your Parcel
            </button>
            <button className="bg-black text-white md:mr-2 btn btn-circle btn-xs md:btn-md">
              <MdArrowOutward size={35} />
            </button>
            <button className="btn btn-neutral btn-outline rounded-xl btn-xs md:btn-md lg:p-5 md:text-lg hover:text-white shadow-none ml-2">
              Be A Rider
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
