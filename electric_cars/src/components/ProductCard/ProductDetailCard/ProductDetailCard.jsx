import React from 'react'
import { useParams } from 'react-router-dom';
import announcement from '../../../data/announcement';
const ProductDetailCard = () => {
     const { id } = useParams();
  const product = announcement.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <PageContainer>
        <div className="text-center py-20 text-2xl font-semibold">
          Məhsul tapılmadı.
        </div>
      </PageContainer>
    );
  }
  return (
      <div className=" min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
            <div className=" flex justify-center items-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>

            <div className="p-10 flex flex-col justify-between">
              <div>
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
                  {product.category}
                </span>

                <h1 className="text-4xl font-bold mt-5 text-gray-800">
                  {product.name}
                </h1>

                <p className="text-gray-500 mt-3 leading-7">
                  Bu elan haqqında bütün məlumatlar aşağıda qeyd olunmuşdur.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">Vəziyyət</span>
                    <span className="font-semibold">{product.condition}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">Miqdar</span>
                    <span className="font-semibold">{product.quantity}</span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-500">Kateqoriya</span>
                    <span className="font-semibold">{product.category}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href={`tel:${product.phone}`}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-center font-semibold transition"
                >
                  📞 {product.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
            <h2 className="text-2xl font-bold mb-5">Ətraflı Məlumat</h2>

            <p className="text-gray-600 leading-8">
              {product.description ||
                "Bu məhsul üçün əlavə açıqlama daxil edilməyib."}
            </p>
          </div>
        </div>
      </div>
  )
}

export default ProductDetailCard
