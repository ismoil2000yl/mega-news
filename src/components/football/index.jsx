import React from 'react'
import FootballImage from 'assets/images/png/footbal.png'

const index = () => {
  return (
    <div className='football' style={{ backgroundImage: `url(${FootballImage})` }}>
      {/* <img src={FootballImage} className="football-image" alt="" /> */}
      <div className="container">
        <div className="football-box" >
          <div className="football-box-calendar football-box-item">
            hello world
          </div>
          <div className="football-box-club football-box-item">
            hello world
          </div>
          <div className="football-box-final football-box-item">
            hello world
          </div>
        </div>
      </div>
    </div>
  )
}

export default index