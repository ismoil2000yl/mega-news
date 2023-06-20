import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import PostItem from 'components/posts/post-item'
import IconLeftBtn from 'assets/images/svg/left-btn.svg'
import IconRightBtn from 'assets/images/svg/right-btn.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const index = ({postTitle}) => {
    // Create array with 1000 slides
    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
    );

    return (
        <div className="container">

            <Swiper
                modules={[Virtual]}
                spaceBetween={'24px'}
                slidesPerView={4}
                virtual
                navigation={{
                    nextEl: ".next",
                    prevEl: ".prev",
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: '24px',
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: '24px',
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: '24px',
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: '24px',
                      },
                }}

                className="swiper-padding"
            >
                <div slot="container-start" className="swiper__box ">
                    <h1 className="swiper__box-title">{postTitle}</h1>
                    <div className="swiper__box-btn">
                        <button className='prev' >
                            <img src={IconLeftBtn} alt="" />
                        </button>
                        <button className='next' >
                            <img src={IconRightBtn} alt="" />
                        </button>
                    </div>
                </div>
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        {/* {slideContent} */}
                        <PostItem flexProps={"flex-col"} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default index
