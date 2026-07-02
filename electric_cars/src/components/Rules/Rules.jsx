import React from 'react'

const Rules = () => {
  return (
        <div className="mb-8  m-auto ">
        <p className="text-xs text-center font-semibold text-gray-700 uppercase tracking-widest mb-4">
          Qaydalar
        </p>
        <ul className="space-y-3  flex-col p-[10px]  justify-between flex gap-[20px] lg:flex-row bg-[#E0B252]">
          {[
            "Avtomobil məlumatları düzgün olmalıdır",
            "Qiymət real göstərilməlidir",
            "Yeni / köhnə vəziyyət qeyd olunmalıdır",
            "Şəkil keyfiyyətli olmalıdır",
            "Əlaqə nömrəsi aktiv olmalıdır",
          ].map((rule, i) => (
            <li
              key={i}
              className="flex items-center  gap-3 text-sm text-gray-600"
            >
              <span className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-500"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    d="M2 5l2.5 2.5L8 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {rule}
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Rules
