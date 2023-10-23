import React from 'react';
import bannerImage from '../Banner/img/backgroundBanner.png'
import '../Banner/Banner.scss'

function Banner() {
    return (
        <div className="banner">
            <img src={bannerImage} alt="banner" className="banner" /> 
            <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>
    )
}

export default Banner;