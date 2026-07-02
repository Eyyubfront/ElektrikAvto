import React from 'react'
import { Link, NavLink, useParams } from "react-router-dom";
import changanrejim from "/info/Changanmode.mp4";
import changansaat from "/info/changansaat.mp4";
import info from "../../../data/info.json";
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
const InfoDetailCard = () => {
     const { id } = useParams();
  const car = info.find((item) => item.id === Number(id));

  if (!car) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-gray-500">
        Məlumat tapılmadı
      </div>
    );
  }
  return (
<>
   <div className=" bottom-0 text-center p-6 md:p-10 text-black">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">{car.name}</h1>
        <p className="text-center text-black-200">{car.description}</p>

        <Breadcrumb currentLabel="Məlumat" currentTo="/info" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white w-[650px] rounded-3xl shadow-xl overflow-hidden hover:scale-[1.01] transition">
          <img src={car.image} alt={car.name} className="w-full h-[550px]" />
          <div className="p-4 text-gray-600 text-sm">Model görüntüsü</div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-4">
          <div className="text-white mb-3 font-semibold text-lg">
            Təlimat Video
          </div>

          {car.name === "Byd Dil Dəyişmə" && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/yP0mR9Cl79Y"
                title="video"
                allowFullScreen
              />
            </div>
          )}

          {car.name === "Byd Təkər Təzyiqi" && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/Nd4ni6W_pGk"
                title="video"
                allowFullScreen
              />
            </div>
          )}

          {/* CHANGAN */}
          {car.name === "Changan Dil Dəyişmə" && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/ug3NpcmO-lw"
                title="video"
                allowFullScreen
              />
            </div>
          )}

          {car.name === "Changan Rejim Seçimi" && (
            <div className="aspect-video">
              <video
                src={changanrejim}
                controls
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          )}
          {car.name === "Changan Saat Dəyişmə" && (
            <div className="aspect-video">
              <video
                src={changansaat}
                controls
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
</>
  )
}

export default InfoDetailCard
