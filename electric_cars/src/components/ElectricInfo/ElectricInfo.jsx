import React from "react";
import car from "../../assets/uni-k-idd-1-1-2.webp";
import { Link } from "react-router-dom";
const ElectricInfo = () => {
  return (
    <div>
      <h2 className='text-center text-[30px] font-["Montserrat"]'>
        Elektrik və Yeni Nəsil Avtomobillər
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 ">
        <div className="max-w-xl bg-white flex flex-col gap-[10px] rounded-3xl p-[20px] shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <p className="text-gray-600  leading-relaxed text-[15px] md:text-base">
            Saytımız elektrik və hibrid avtomobillərlə maraqlanan hər kəs üçün
            yaradılıb. Burada BYD və Changan modelləri haqqında ətraflı məlumat
            əldə edə, texniki xüsusiyyətləri müqayisə edə, qiymətlərlə tanış ola
            və ən son satış elanlarını izləyə bilərsiniz.
          </p>

          <Link
            to="/info"
            className="inline-flex items-center m-auto justify-center  gap-2 mt-5 text-white font-semibold border hover:text-amber-600 border-amber-500 px-5 py-2.5 rounded-full bg-amber-500  hover:shadow-lg transition-all duration-300"
          >
            Daha çox
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="relative">
          <img
            className=" w-full object-contain drop-shadow-2xl transition-transform duration-300"
            src={car}
            alt="car"
          />

          <div className="absolute -inset-6 bg-blue-200/20 blur-3xl rounded-full -z-10"></div>
        </div>
      </div>
      <div className="flex flex-col p-3 gap-[10px] md:flex-row mb-1">
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden p-4">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bhFMpWMHf8Y?si=3RN5t2YVGAPagGh7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden p-4">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/8hidULl548o?si=jaKGqmHquKhi2OgA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture;
 web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricInfo;
