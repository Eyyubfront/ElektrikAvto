import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../ProductCard/ProductCard'

const HomeAnnouncement = () => {
  return (
     <div className="m-auto mb-8">
        <h1 className="text-2xl text-center text-gray-900 tracking-tight">
          Elanlar
        </h1>
        <Link to="/announcement">
          <div className="text-right">
            <p className="text-amber-500 text-center md:text-end text-sm mb-4 font-medium hover:text-amber-600 transition-colors">
              Bütün hamısına bax →
            </p>
          </div>
        </Link>
        <ProductCard limit={4} />
      </div>
  )
}

export default HomeAnnouncement
