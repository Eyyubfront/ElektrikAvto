import React from 'react'
import wplogo from "../../assets/WhatsApp.svg.webp"

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-6 top-180  right-0 z-50 flex flex-col items-end">
      <div className="relative flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-2xl w-fit border border-gray-200 shadow-sm">
        <div className="absolute right-3 -bottom-1 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45"></div>
        <span>Nömrəyə elanınızı göndərə bilərsiniz</span>
      </div>

      <div className="w-[70px] mt-2">
        <a
          href="https://wa.me/994706504565"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
        >
          <span>
            <img src={wplogo} className="h-[40px]" alt="WhatsApp" />
          </span>
        </a>
      </div>
    </div>
  )
}

export default WhatsappButton