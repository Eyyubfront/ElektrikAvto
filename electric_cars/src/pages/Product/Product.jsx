import React, { useState } from "react";
import Announcement from "../../data/announcement.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Rules from "../../components/Rules/Rules";
import HeadTittle from "../../components/HeadTittle/HeadTittle";
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Spoiler",
    "Disk",
    "Yarasa güzgü",
    "Çuxol",
    "Bufer",
    "Fara",
    "Qapı",
    "Adapter",
    "Ayaq altı",
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <HeadTittle
        title="ElectrikAvto elan sistemi"
        Subtitle="Elektrik avtomobilləri üçün elan platforması."
      />

      <Breadcrumb currentLabel="Elan" currentTo="/announcement" />

      <Rules />
      <div className="flex justify-center mb-4">
    <div className="overflow-x-auto scrollbar-hide">
  <ul className="flex sm:flex-wrap gap-3 bg-gray-100 p-2 rounded-2xl min-w-max sm:min-w-0">
    <li
      onClick={() => setSelectedCategory("")}
      className={`whitespace-nowrap px-4 py-2 rounded-full cursor-pointer transition-all duration-200
      ${
        selectedCategory === ""
          ? "bg-amber-500 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      Hamısı
    </li>

    {categories.map((item) => (
      <li
        key={item}
        onClick={() => setSelectedCategory(item)}
        className={`whitespace-nowrap px-4 py-2 rounded-full cursor-pointer transition-all duration-200
        ${
          selectedCategory === item
            ? "bg-amber-500 text-white shadow-md"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        {item}
      </li>
    ))}
  </ul>
</div>
      </div>
      <ProductCard category={selectedCategory} />
    </div>
  );
};

export default Product;
