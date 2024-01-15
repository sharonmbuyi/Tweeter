import React from 'react'

export default function ImageAvatar(props) {
  return (
    <div className="w-20 h-20">
       <img src={props.src} alt={props.alt} className={props.className} style={{ borderRadius: '100%'}} />
    </div>
  )
}
