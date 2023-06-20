import { useNavigate } from 'react-router-dom'
import React from 'react'
import Posts from 'components/posts'
import PostSlide from 'components/postSlider'
import SmallCategory from 'components/small-category'
import Banners from 'components/banners'
import Football from 'components/football'
import NewPosts from 'components/new-posts'
import LatestVideos from 'components/latest-videos'
import Weather from 'components/weather'

const index = () => {

  const navigate = useNavigate()

  return (
    <div>
      <SmallCategory />
      <Banners />
      <PostSlide postTitle={"Popular Posts"}/>
      <Football />
      <NewPosts />
      {/* <LatestVideos/> */}
      <PostSlide postTitle={"Trendy Posts"}/>
      <Weather/>
      <PostSlide postTitle={"Top Posts"}/>
    </div>
  )
}

export default index