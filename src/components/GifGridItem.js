import React from 'react'

export const GifGridItem = ({id,title,url}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}></img>
            <h3>{title}</h3>
        </div>
    )
}
