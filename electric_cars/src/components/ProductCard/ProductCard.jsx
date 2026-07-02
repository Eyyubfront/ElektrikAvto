import React from "react";
import Announcement from "../../data/announcement.json";
import { Link } from "react-router-dom";

const ProductCard = ({ category, limit }) => {
  const filteredData = category
    ? Announcement.filter((item) => item.category === category)
    : Announcement;

  return (
    <div className="w-full flex-wrap flex flex-row justify-center gap-[10px] flex-wrap">
      {filteredData.slice(0, limit || filteredData.length).map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-2xl border w-[300px]  border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all duration-200"
        >
          <Link to={`/announcement/${car.id}`}>
            <div className="relative w-full h-[250px] bg-gray-50">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />

              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full ${
                  car.condition === "New"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {car.condition}
              </span>
            </div>

            <div className=" flex p-[10px] flex-col gap-2">
              <h2 className="text-base font-semibold text-gray-900">
                {car.name}
              </h2>

              <p className="text-lg font-semibold text-blue-600">{car.price}</p>

              <div className="space-y-1.5 mb-4">
                <p className="text-xs text-gray-500 flex items-center gap-1.5">
                  <span>🔋</span> {car.description}
                </p>

                <p className="text-xs text-gray-500 flex items-center gap-1.5">
                  <span>📦</span> Miqdar: {car.quantity}
                </p>

                <p className="text-xs text-gray-500 flex items-center gap-1.5">
                  <span>📞</span> {car.phone}
                </p>
              </div>

           
            </div>
          </Link>
             <div className="flex mb-2 justify-center">
                <a
                  href={`tel:${car.phone}`}
                  className="inline-flex items-center m-auto justify-center  gap-2 mt-5 text-white font-semibold border hover:text-amber-600 border-amber-500 px-5 py-2.5 rounded-full bg-amber-500  hover:shadow-lg transition-all duration-300"
                >
                  Mesaj yaz
                </a>
              </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
