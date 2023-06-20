import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContainerAll from 'modules/container/all'

const index = () => {

  const pagination = {
    clickable: true,
    el: ".swiper-info",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  // /navigation

  SwiperCore.use([Navigation, Pagination, A11y, EffectCoverflow]);

  let swiper;

  const handleSlideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleSlidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <ContainerAll
      url={"/banners"}
      queryKey={"banners"}
      params={{
        sort: "-updated_at",
        include: "file",
        limit: "5",
        // page: get(params, "page", 1),
        extra: { _l: "uz" },
        filter:{
          type: "2"
        }
      }}
    >
      {
        ({ items, isLoading }) => {
          return (
            <Swiper
              effect="colow"
              pagination={pagination}
              modules={[Navigation, Pagination, A11y, EffectCoverflow]}
              slidesPerView={"auto"}
              spaceBetween={10}
              mousewheel={true}
              keyboard={true}
              onSwiper={(swiperInstance) => (swiper = swiperInstance)}
            >
              <div className="right__swiper-btnbox">
                <IoIosArrowBack
                  className="icon-swiper"
                  onClick={handleSlidePrev}
                />
                <IoIosArrowForward
                  className="icon-swiper"
                  onClick={handleSlideNext}
                />
              </div>
              <div className="swiper-info"></div>
              {
                !isLoading ?
                  items?.map((item) => {
                    return (
                      <SwiperSlide key={item?.id}>
                        <div className="card__right-banner">
                          <img src={item?.file?.thumbnails?.normal?.src} alt="" />
                          <div className="card-info">
                            <h3>{item?.name_uz}</h3>
                            <p>
                              {item?.description_uz}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  }) : <h1>Loading...</h1>
              }
            </Swiper>
          )
          // }): <h1>Loading...</h1>
        }
      }
    </ContainerAll>
  )
}

export default index