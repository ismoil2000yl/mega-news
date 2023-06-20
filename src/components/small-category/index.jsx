import React from 'react'
import IconSmallCategory from 'assets/images/png/small-category1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import IconLeft from 'assets/images/svg/left-btn.svg'
import IconRight from 'assets/images/svg/right-btn.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const index = () => {
    return (
        <div className='container'>
            <div className="small-category">
                <button className='small-category-left small-category-btn'>
                    <img src={IconLeft} alt="" />
                </button>
                {/* <div className='small-category-box'> */}
                <Swiper
                    slidesPerView={7.3}
                    spaceBetween={"25px"}
                    navigation={{
                        prevEl: ".small-category-left",
                        nextEl: ".small-category-right",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        481: {
                            slidesPerView: 1.7,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                    className='small-category-box'
                >
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className="small-category-box__item">
                            <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                            <h4 className='small-category-box__item-title'>#food</h4>
                        </button>
                    </SwiperSlide>
                </Swiper>
                {/* </div> */}
                <button className='small-category-right small-category-btn'>
                    <img src={IconRight} alt="" />
                </button>
            </div>
        </div>
    )
}

export default index

{/* <button className="small-category-box__item">
                        <img src={IconSmallCategory} className="small-category-box__item-img" alt="" />
                        <h4 className='small-category-box__item-title'>#food</h4>
                    </button> */}


