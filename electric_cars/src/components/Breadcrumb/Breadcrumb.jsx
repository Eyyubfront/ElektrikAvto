import { Link, NavLink } from "react-router-dom";

export default function Breadcrumb({
  homeLabel = "Əsas səhifə",
  homeTo = "/",
  currentLabel,
  currentTo,
}) {
  return (
    <div className="p-3 flex gap-[10px] justify-center  md:justify-start items-center mt-2 mb-1">
      <Link to={homeTo} className="font-['Montserrat'] text-gray-500">
        {homeLabel}
      </Link>

      <p>/</p>

      {currentTo ? (
        <NavLink
          to={currentTo}
          className={({ isActive }) =>
            `font-["Montserrat"] hover:text-amber-600 ${
              isActive ? "text-amber-500" : "text-black"
            }`
          }
        >
          {currentLabel}
        </NavLink>
      ) : (
        <p className="text-black font-['Montserrat']">{currentLabel}</p>
      )}
    </div>
  );
}