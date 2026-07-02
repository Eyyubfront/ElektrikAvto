import React from "react";
import { Link, NavLink } from "react-router-dom";
import electriclogo from "../../assets/Gemini_Generated_Image_lp6hsnlp6hsnlp6h.png";
import Burgermenu from "../../components/Burgermenu/Burgermenu";
const Header = () => {
  return (
    <div className="flex items-center flex-row justify-between bg-[#333]">
      <div>
        <img className="w-[100px]" src={electriclogo} alt="" />
      </div>
      <nav>
<ul className="hidden lg:flex flex-row gap-[25px]">
          <li className="text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-["Montserrat"] hover:text-amber-600 ${
         isActive ? "text-amber-500" : "text-gray-500"
                }`
              }
            >
              Əsas səhifə
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink
              to="/announcement"
              className={({ isActive }) =>
                `font-["Montserrat"] hover:text-amber-600 ${
                  isActive ? "text-amber-500" : "text-gray-500"
                }`
              }
            >
              Elan
            </NavLink>
          </li>

          <li className="text-white">
            <NavLink
              to="/info"
              className={({ isActive }) =>
                `font-["Montserrat"] hover:text-amber-600 ${
                 isActive ? "text-amber-500" : "text-gray-500"
                }`
              }
            >

              
              Məlumat
            </NavLink>
          </li>

          <li className="text-white">
            <NavLink
              to="/charging"
              className={({ isActive }) =>
                `font-["Montserrat"] hover:text-amber-600 ${
             isActive ? "text-amber-500" : "text-gray-500"
                }`
              }
            >
              Şarj məntəqələri
            </NavLink>
          </li>
        </ul>
      </nav>
      <Burgermenu/>
    </div>
  );
};

export default Header;
