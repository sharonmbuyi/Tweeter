import { data } from 'autoprefixer'
import React, { useState } from 'react'
// const [like,setLike]= useState(1)
// function ajoutlike(setLike){
//       setLike += 1
// }

export default function IconReaction ({ src, className }) {
    return (
        <div className="flex gap-2">
        <img src={src} alt="" className={`cursor-pointer ${className}`} />
        <h3 className="text-white">160k</h3>
        </div>
    )
      };
