import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../assets/banner/banner1.png"
import banner2 from "../../assets/banner/banner2.png"
import banner3 from "../../assets/banner/banner3.png"
import { MdArrowOutward } from "react-icons/md";
const Slider = () => {
    return (
        <Carousel  autoPlay infiniteLoop interval={2000} showArrows showThumbs={false} showIndicators={false} showStatus={false} stopOnHover className="hover:cursor-pointer h-[80vh]">
                <div className="relative">
                    <img src={banner1} className="h-[80vh] object-cover"/>
                    <div className="absolute md:bottom-8 lg:bottom-7 md:left-25 lg:left-30 max-w-4xl text-start">
                        <p className="mb-5 lg:text-xl">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                        <div className=" flex items-center">
                         <button className="btn bg-[#CAEB66] rounded-full text md:p-5 text-lg">Track Your Parcel</button>
                        <button className="bg-black rounded-full text-white mr-2"><MdArrowOutward size={35}/></button>
                        <button className="btn btn-neutral btn-outline rounded-xl md:p-5 text-lg hover:text-white shadow-none ml-2">Be A Rider</button>
                       </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={banner2}  className="h-[80vh] object-cover"/>
                    <div className="absolute md:bottom-8 lg:bottom-8 md:left-25 lg:left-30 max-w-4xl text-start">
                        <p className="mb-5 lg:text-xl">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                       <div className=" flex items-center">
                         <button className="btn bg-[#CAEB66] rounded-full text md:p-5 text-lg">Track Your Parcel</button>
                        <button className="bg-black rounded-full text-white mr-2"><MdArrowOutward size={35}/></button>
                        <button className="btn btn-neutral btn-outline rounded-xl md:p-5 text-lg hover:text-white shadow-none ml-2">Be A Rider</button>
                       </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={banner3}  className="h-[80vh] object-cover"/>
                    <div className="absolute md:bottom-8 lg:bottom-18 md:left-25 lg:left-30 max-w-4xl text-start">
                        <p className="mb-5 lg:text-xl">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                        <div className=" flex items-center">
                         <button className="btn bg-[#CAEB66] rounded-full text md:p-5 text-lg">Track Your Parcel</button>
                        <button className="bg-black rounded-full text-white mr-2"><MdArrowOutward size={35}/></button>
                        <button className="btn btn-neutral btn-outline rounded-xl md:p-5 text-lg hover:text-white shadow-none ml-2">Be A Rider</button>
                       </div>
                    </div>
                </div>
            </Carousel>
    );
};

export default Slider;