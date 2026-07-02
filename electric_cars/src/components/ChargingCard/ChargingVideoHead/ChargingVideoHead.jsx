import React from "react";
import tiktokcharging from "/info/tiktokcharging.jpg";

const ChargingVideoHead = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-72 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 font-semibold tracking-wide">
          Təlimat Video
        </div>

        {/* Image */}
        <a
          href="https://www.tiktok.com/@changana05/video/7507311014816288008?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          <img
            src={tiktokcharging}
            alt="Charging Tutorial"
            className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
          />
        </a>

        {/* Content */}
        <div className="p-4 text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            Şarj cihazının istifadəsi ilə bağlı təlimat videosunu izləmək üçün
            şəkilə klik edin.
          </p>

          {/* small button feel */}
          <div className="mt-3">
            <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
              Videoya bax
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargingVideoHead;