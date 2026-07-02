import React from 'react'
import charging from "../../data/charging.json";
const ChargingCard = () => {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {charging.map((charg) => (
          <div
            key={charg.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="h-48 w-full">
              <img
                src={charg.image}
                alt={charg.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex items-center gap-3">
              <span className="text-green-500 text-lg mt-1">⚡</span>

              <div>
                <p className="text-gray-800 font-semibold text-base">
                  {charg.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ChargingCard
