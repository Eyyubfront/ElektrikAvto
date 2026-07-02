import React from 'react'
import bydvideo from "../../../assets/video-fd.mp4";
const HomeBottomVideo = () => {
  return (
     <div className="relative w-full h-[500px] overflow-hidden">
          <video
            src={bydvideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
  )
}

export default HomeBottomVideo
