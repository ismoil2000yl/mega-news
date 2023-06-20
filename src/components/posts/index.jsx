import React from 'react'
import PostItem from './post-item'

const index = () => {
    return (
        <div className='post__container post'>
            <div className='container post__box post__col'>
                <PostItem flexProps={"flex-col"} />
                <PostItem flexProps={"flex-col"} />
                <PostItem flexProps={"flex-col"} />
                <PostItem flexProps={"flex-col"} />
                <PostItem flexProps={"flex-col"} />
                <PostItem flexProps={"flex-col"} />
                <PostItem flexProps={"flex-col"} />
                <PostItem flexProps={"flex-col"} />
                <PostItem flexProps={"flex-col"} />
            </div>
            <div className='container post__box post__row'>
                <PostItem flexProps={"flex-row"} />
                <PostItem flexProps={"flex-row"} />
                <PostItem flexProps={"flex-row"} />
                <PostItem flexProps={"flex-row"} />
                <PostItem flexProps={"flex-row"} />
                <PostItem flexProps={"flex-row"} />
                <PostItem flexProps={"flex-row"} />
                <PostItem flexProps={"flex-row"} />
                <PostItem flexProps={"flex-row"} />
            </div>
        </div>
    )
}

export default index