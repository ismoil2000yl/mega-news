import React from 'react'
import IconRight from 'assets/images/svg/right-btn.svg'
import PostItem from 'components/posts/post-item'

const index = () => {
    return (
        <div className="container">
            <div className='new-posts'>
                <div className="new-posts-box">
                    <h1 className="new-posts-box__title">New Posts</h1>
                    <button className='new-posts-box__btn'>
                        Show All
                        <img src={IconRight} className="new-posts-box__btn-icon" alt="" />
                    </button>
                </div>
                <div className="post__box post__row">
                    <PostItem flexProps={"flex-row"} />
                    <PostItem flexProps={"flex-row"} />
                    <PostItem flexProps={"flex-row"} />
                    <PostItem flexProps={"flex-row"} />
                    <PostItem flexProps={"flex-row"} />
                    <PostItem flexProps={"flex-row"} />
                </div>
            </div>
        </div>
    )
}

export default index