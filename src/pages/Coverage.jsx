import React, { useRef } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
  const position = [22.3752, 91.8349];

  const handleSearchCenter = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      //location
      mapRef.current.flyTo(coord, 14);
    }
  };
  return (
    <div className="md:w-8xl mx-auto rounded-2xl p-5 md:px-15 md:py-15 bg-white text-[#03373D] space-y-5">
      <h1 className="text-3xl md:text-5xl font-bold ">
        We are available in 64 districts
      </h1>
      <form onSubmit={handleSearchCenter}>
        <label className="input rounded-full md:w-full max-w-lg">
          <FaSearchLocation size={23} />
          <input
            type="search"
            name="location"
            required
            placeholder="Search here"
            className="input-lg"
          />
        </label>
        <button
          type="submit"
          className="bg-[#CAEB66] px-5 py-2 rounded-full ml-1 btn md:text-xl"
        >
          Search
        </button>
      </form>
      <h1 className="border border-gray-300 mt-7"></h1>
      <h1 className="text-2xl font-bold">
        We deliver almost all over Bangladesh
      </h1>
      <div className="w-full h-150">
        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={false}
          ref={mapRef}
          className="h-full rounded-2xl shadow-2xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong className="text-xl">{center.district} </strong>
                <h1 className="font-bold mb-1">
                  Services Area : <br />{" "}
                </h1>
                {center.covered_area.map((city, idx) => (
                  <li key={idx}>{city}</li>
                ))}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
