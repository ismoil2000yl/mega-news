import React from 'react'
import SliderBanner from './slider-banner'
import SimpleBanner from './simple-banner'

const index = () => {
  return (
    <div className="container">
      <div className="banners">
        <div className="banners__left">
          <SimpleBanner />
        </div>
        <div className="banners__right">
          <SliderBanner />
        </div>
      </div>
    </div>
  )
}

export default index