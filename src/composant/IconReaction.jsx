import { data } from 'autoprefixer'
import React, { useState } from 'react'
// const [like,setLike]= useState(1)
// function ajoutlike(setLike){
//       setLike += 1
// }

export default function IconReaction(props) {
    return (
        <div className="flex gap-2">
            <img src={props.src} alt= {props.alt} />
            <h3 className="text-white">160k</h3>
        </div>
    )
}
