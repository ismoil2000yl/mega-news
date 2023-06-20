import React from 'react'
import IconLeftBtn from 'assets/images/svg/left-btn.svg'
import IconRightBtn from 'assets/images/svg/right-btn.svg'
import IconFullVideo from 'assets/images/png/full-video.png'
// import IconPlay from 'assets/images/svg/play.svg'
import IconPlay from 'assets/images/jpg/play.jpg'

const index = () => {
    return (
        <div className='latest-videos'>
            <div className="container">
                <div slot="container-start" className="swiper__box ">
                    <h1 className="swiper__box-title">Latest Videos</h1>
                    <div className="swiper__box-btn">
                        <button className='latest-videos-prev' >
                            <img src={IconLeftBtn} alt="" />
                        </button>
                        <button className='latest-videos-next' >
                            <img src={IconRightBtn} alt="" />
                        </button>
                    </div>
                </div>
                <div className="latest-videos-box">
                    <div className="latest-videos-box-left">
                        <div className="full-video">
                            {/* <video src={"https://www.youtube.com/watch?v=R1Lz_ZsUcho"}></video> */}
                            <img src={IconFullVideo} className="full-video-img" alt="" />
                            <div className="full-video-box">
                                <h3 className='full-video-box-title'>How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)</h3>
                                <p className='full-video-box-description'>
                                    You’ve read all your free member-only stories,
                                    become a member to get unlimited access. Your
                                    membership fee supports the voices you want to hear more from.
                                </p>
                                <div className="play-icon">
                                    <div className="box_1"></div>
                                    <div className="box_2"></div>
                                    <div className="box_3"></div>
                                    <div className="box_4"><img src={IconPlay} className="play-icon-img" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-videos-box-right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default index