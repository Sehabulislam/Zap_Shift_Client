import StandardDelivery from "../../assets/icon/standard-shipping.png";
import NationDelivery from "../../assets/icon/cash-on-delivery.png";
import Fulfillment from "../../assets/icon/business.png";
import HomeDelivery from "../../assets/icon/money.png";
import Corporate from "../../assets/icon/corporate.png";
import ReturnDelivery from "../../assets/icon/return-box.png";

const services = [
  {
    image: StandardDelivery,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
  },
  {
    image: NationDelivery,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    image: Fulfillment,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    image: HomeDelivery,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    image: Corporate,
    title: "Corporate Service / Contract in Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    image: ReturnDelivery,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];
const Services = () => {
  return (
    <div className="bg-[#03373D] text-white p-10 max-w-8xl mx-auto rounded-2xl mb-10">
      <div className="flex flex-col justify-center items-center gap-2 mb-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="max-w-3xl text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white h-auto flex flex-col justify-start gap-4 p-5 rounded-2xl shadow-xl text-[#03373D]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 mx-auto"
            />
            <h1 className="text-xl md:text-2xl font-bold text-center">
              {service.title}
            </h1>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;


