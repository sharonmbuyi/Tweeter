import React from 'react'

export default function Tweetgalerie(src,alt) {
  return (
    <div>
      <img src={src} alt={alt} className="flex items-center space-x-4 pl-20 " />
    </div>
  )
}
