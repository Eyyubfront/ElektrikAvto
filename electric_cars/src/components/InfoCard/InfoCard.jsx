import React from 'react'
import { Link } from 'react-router-dom'
import info from "../../data/info.json";
const InfoCard = () => {
  return (
      <div className="flex flex-wrap justify-center gap-8 p-6 ">
        {info.map((car) => (
          <Link key={car.id} to={`/info/${car.id}`}>
            <div className="w-[300px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-500 transition-colors">
                  {car.name}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Premium avtomobil haqqında ətraflı məlumat əldə edin.
                </p>

                <button className="mt-5 cursor-pointer w-full bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600 transition">
                  Ətraflı Bax
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default InfoCard
