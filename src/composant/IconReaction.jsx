import { data } from 'autoprefixer'
import React from 'react'

export default function IconReaction(props) {
    return (
        <div className="flex gap-2">
            <img src={props.src} alt= {props.alt} />
            <h3 className="text-white">16000k</h3>
        </div>
    )
}
