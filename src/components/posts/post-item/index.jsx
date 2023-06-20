import React from 'react'
import Image from 'assets/images/png/boating.png'
import moment from 'moment/moment'
import User from 'assets/images/png/user.png'
import Save from 'assets/images/svg/save.svg'

const index = ({flexProps}) => {
    return (
        <div className={`post-item ${flexProps}`}>
            <div className="post-item__img">
                <img src={Image} alt="" />
            </div>
            <div className="post-item__content content">
                <h1 className='content__title'>Opening Day of Boating Season, Seattle WA</h1>
                <p className='content__description'>
                    Of course the Puget Sound is very watery,
                    and where there is water, there are boats.
                    Today is the Grand Opening of Boating Season
                    when traffic gets stalled in the University
                    District (UW) while the Montlake Bridge
                </p>
                <div className='content__user'>
                    <div>
                        <img src={User} className='content__user-avatar' alt="" />
                    </div>
                    <div className="content__user-info user-info">
                        <h2 className='user-info__name'>James</h2>
                        <p className='user-info__data'>{moment().format('MMMM Do YYYY')}</p>
                    </div>
                    <div className='user-info__save'>
                        <img src={Save} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index