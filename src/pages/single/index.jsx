import React from 'react'
import moment from 'moment/moment'
import Input from 'components/field/input'
import Textarea from 'components/field/textearea'
import Img from 'assets/images/png/boating.png'
import Img2 from 'assets/images/png/content.png'
import IconCalendar from 'assets/images/svg/calendar.svg'
import IconComment from 'assets/images/svg/comment.svg'
import IconCategory from 'assets/images/svg/category.svg'
import IconShare from 'assets/images/svg/share.svg'
import IconMarketing from 'assets/images/svg/marketing.png'
import IconReplay from 'assets/images/svg/replay.svg'
import UserAvatar from 'assets/images/png/user-avatar.png'
import TopPost1 from 'assets/images/png/top-post1.png'
import TopPost2 from 'assets/images/png/top-post2.png'
import TopPost3 from 'assets/images/png/top-post3.png'
import TopPost4 from 'assets/images/png/top-post4.png'
import TopPost5 from 'assets/images/png/top-post5.png'
import Advertising1 from 'assets/images/png/advertising1.png'
import Advertising2 from 'assets/images/png/advertising2.png'

const index = () => {
  return (
    <div className='container'>
      <div className="single">
        <div className="single__left">
          <div className="single-post">
            <h1 className="single-post__title">
              How to Spend the Perfect Day on Croatia’s Most Magical Island
            </h1>
            <img src={Img} alt="" className="single-post__img" />
          </div>
          <ul className="single-post-group">
            <li className='single-post-item'>
              <img src={IconCalendar} alt="" />
              {moment().format('MMMM Do YYYY')}
            </li>
            <li className='single-post-item'>
              <img src={IconComment} alt="" />
              Comments - 38
            </li>
            <li className='single-post-item'>
              <img src={IconCategory} alt="" />
              Category - Sport
            </li>
          </ul>
          <div className="single-post-info">
            <h4 className="single-post-info__title">
              Don’t wait. The purpose of our lives is to be happy!
            </h4>
            <p className="single-post-info__description">
              Upon arrival, your senses will be rewarded with the pleasant
              scent of lemongrass oil used to clean the natural wood found
              throughout the room, creating a relaxing atmosphere within the space.
              A wonderful serenity has taken possession of my entire soul,
              like these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot,
              which was created for the bliss of souls like mine.
              I am so happy, my dear friend, so absorbed in the exquisite.
            </p>
          </div>
          <div className="single-post-content post-content">
            <div className="post-content__div-img">
              <img src={Img2} alt="" className='post-content__img' />
            </div>
            <h4 className="post-content__title">
              Not how long, but how well you have lived is the main thing.
            </h4>
            <p className="post-content__description">
              When you are ready to indulge your sense of excitement,
              check out the range of water- sports opportunities at the
              resort’s on-site water-sports center. Want to leave your
              stress on the water? The resort has kayaks, paddleboards,
              or the low-key pedal boats. Snorkeling equipment is available
              as well, so you can experience the ever-changing undersea environment.
              Not only do visitors to a bed and breakfast get a unique
              perspective on the place they are visiting, they have options
              for special packages not available in other hotel settings.
              Bed and breakfasts can partner easily with local businesses
              for a smoothly organized and highly personalized vacation experience.
              The Fife and Drum Inn offers options such as the Historic
              Triangle Package that includes three nights at the Inn,
              breakfasts, and admissions to historic Williamsburg, Jamestown,
              and Yorktown. Bed and breakfasts also lend themselves to romance.
              Part of the charm of a bed and breakfast is the uniqueness; art, décor,
              and food are integrated to create a complete experience. For example,
              the Fife and Drum retains the colonial feel of the area in all its guest rooms.
              Special features include antique furnishings, elegant four poster beds in
              some guest rooms, as well folk art and artifacts from the restoration
              period of the historic area available for guests to enjoy.
            </p>
          </div>
        </div>
        <div className="single__right">
          <div className="share-group">
            <button className="share-group-item">
              <img src={IconShare} className="share-group-item-icon" alt="" />
              Share
            </button>
            <button className="share-group-item">
              <img src={IconMarketing} className="share-group-item-icon" alt="" />
              Marketing
            </button>
            <button className="share-group-item">
              <img src={IconComment} className="share-group-item-icon" alt="" />
              Comments
            </button>
          </div>
          <div className="single-user-box">
            <div className="single-user-box-left">
              <img className='single-user-box-left-img' src={UserAvatar} alt="" />
            </div>
            <div className="single-user-box-right">
              <h4 className='single-user-box-right__username'>Louis Hoebregts</h4>
              <button className='single-user-box-right__btn'>+ Follow</button>
            </div>
            <div className="single-user-box-post">
              <h5 className='single-user-box-post__item'>27 posts</h5>
            </div>
          </div>
          <div className="single-tag">
            <h1 className='single-tag-title'>Tags</h1>
            <div className="single-tags">
              <h5 className='single-tags__item'>Montenegro</h5>
              <h5 className='single-tags__item'>Visit Croatia</h5>
              <h5 className='single-tags__item'>Luxury Travel</h5>
              <h5 className='single-tags__item'>Travel Log</h5>
              <h5 className='single-tags__item'>Paradise Island</h5>
              <h5 className='single-tags__item'>Travel Info</h5>
            </div>
          </div>
          <div className="top-posts">
            <h1 className="top-posts-title">Top posts</h1>
            {/*  POST 1  */}
            <div className="top-posts-info">
              <div className="top-posts-info-left">
                <img className='top-posts-info-left-img' src={TopPost1} alt="" />
              </div>
              <div className="top-posts-info-right">
                <h4 className="top-posts-info-right-title">
                  How to Spend the Perfect Day on Croatia’s Most Magical Island
                </h4>
                <h4 className="top-posts-info-right-subhead">Subhead</h4>
              </div>
            </div>
            {/*  POST 2  */}
            <div className="top-posts-info">
              <div className="top-posts-info-left">
                <img className='top-posts-info-left-img' src={TopPost2} alt="" />
              </div>
              <div className="top-posts-info-right">
                <h4 className="top-posts-info-right-title">
                  How to Spend the Perfect Day on Croatia’s Most Magical Island
                </h4>
                <h4 className="top-posts-info-right-subhead">Subhead</h4>
              </div>
            </div>
            {/*  POST 3  */}
            <div className="top-posts-info">
              <div className="top-posts-info-left">
                <img className='top-posts-info-left-img' src={TopPost3} alt="" />
              </div>
              <div className="top-posts-info-right">
                <h4 className="top-posts-info-right-title">
                  How to Spend the Perfect Day on Croatia’s Most Magical Island
                </h4>
                <h4 className="top-posts-info-right-subhead">Subhead</h4>
              </div>
            </div>
            {/*  POST 4  */}
            <div className="top-posts-info">
              <div className="top-posts-info-left">
                <img className='top-posts-info-left-img' src={TopPost4} alt="" />
              </div>
              <div className="top-posts-info-right">
                <h4 className="top-posts-info-right-title">
                  How to Spend the Perfect Day on Croatia’s Most Magical Island
                </h4>
                <h4 className="top-posts-info-right-subhead">Subhead</h4>
              </div>
            </div>
            {/*  POST 5  */}
            <div className="top-posts-info">
              <div className="top-posts-info-left">
                <img className='top-posts-info-left-img' src={TopPost5} alt="" />
              </div>
              <div className="top-posts-info-right">
                <h4 className="top-posts-info-right-title">
                  How to Spend the Perfect Day on Croatia’s Most Magical Island
                </h4>
                <h4 className="top-posts-info-right-subhead">Subhead</h4>
              </div>
            </div>
          </div>

          <div className="advertising">
            <img src={Advertising1} className='advertising__img' alt="" />
          </div>
          <div className="advertising">
            <img src={Advertising2} className='advertising__img' alt="" />
          </div>
        </div>
      </div>
      {/*  COMMENTS  */}
      <div className="comments">
        <h4 className='comments__title'>Comments</h4>
        <div className="comments-info">
          <div className="comments-info-user">
            <div className="comments-info-user-left com-user">
              <div className="com-user__img">
                <img src={UserAvatar} className={"com-user__img-item"} alt="" />
              </div>
              <div className="com-user-info">
                <h4 className='com-user-info-username'>Jon Kantner</h4>
                <div className="com-user-info-data">
                  <img src={IconCalendar} className={"com-user-info-data-img"} alt="" />
                  <h5 className='com-user-info-data-item'>
                    {moment().format('MMMM Do YYYY')}
                  </h5>
                </div>
              </div>
            </div>
            <div className="comments-info-user-right">
              <button className='comments-info-user-right__replay'>
                <img src={IconReplay} className="comments-info-user-right__replay-img" alt="" />
                Replay
              </button>
            </div>
          </div>
          <p className='comments-info-description'>
            When you are ready to indulge your sense of excitement,
            check out the range of water- sports opportunities at the
            resort’s on-site water-sports center. Want to leave your
            stress on the water? The resort has kayaks, paddleboards,
            or the low-key pedal boats.
          </p>
        </div>
        {/*  REPLACE COMMENT   */}
        <div className="replace-comment-box">
          <div className="replace-comment">
            <div className="comments-info-user">
              <div className="comments-info-user-left com-user">
                <div className="com-user__img">
                  <img src={UserAvatar} className={"com-user__img-item"} alt="" />
                </div>
                <div className="com-user-info">
                  <h4 className='com-user-info-username'>Jon Kantner</h4>
                  <div className="com-user-info-data">
                    <img src={IconCalendar} className={"com-user-info-data-img"} alt="" />
                    <h5 className='com-user-info-data-item'>
                      {moment().format('MMMM Do YYYY')}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <p className='comments-info-description'>
              When you are ready to indulge your sense of excitement,
              check out the range of water- sports opportunities at the
              resort’s on-site water-sports center. Want to leave your
              stress on the water? The resort has kayaks, paddleboards,
              or the low-key pedal boats.
            </p>
          </div>

          <div className="replace-comment">
            <div className="comments-info-user">
              <div className="comments-info-user-left com-user">
                <div className="com-user__img">
                  <img src={UserAvatar} className={"com-user__img-item"} alt="" />
                </div>
                <div className="com-user-info">
                  <h4 className='com-user-info-username'>Jon Kantner</h4>
                  <div className="com-user-info-data">
                    <img src={IconCalendar} className={"com-user-info-data-img"} alt="" />
                    <h5 className='com-user-info-data-item'>
                      {moment().format('MMMM Do YYYY')}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <p className='comments-info-description'>
              When you are ready to indulge your sense of excitement,
              check out the range of water- sports opportunities at the
              resort’s on-site water-sports center. Want to leave your
              stress on the water? The resort has kayaks, paddleboards,
              or the low-key pedal boats.
            </p>
          </div>
        </div>

        <div className="comments-info">
          <div className="comments-info-user">
            <div className="comments-info-user-left com-user">
              <div className="com-user__img">
                <img src={UserAvatar} className={"com-user__img-item"} alt="" />
              </div>
              <div className="com-user-info">
                <h4 className='com-user-info-username'>Jon Kantner</h4>
                <div className="com-user-info-data">
                  <img src={IconCalendar} className={"com-user-info-data-img"} alt="" />
                  <h5 className='com-user-info-data-item'>
                    {moment().format('MMMM Do YYYY')}
                  </h5>
                </div>
              </div>
            </div>
            <div className="comments-info-user-right">
              <button className='comments-info-user-right__replay'>
                <img src={IconReplay} className="comments-info-user-right__replay-img" alt="" />
                Replay
              </button>
            </div>
          </div>
          <p className='comments-info-description'>
            When you are ready to indulge your sense of excitement,
            check out the range of water- sports opportunities at the
            resort’s on-site water-sports center. Want to leave your
            stress on the water? The resort has kayaks, paddleboards,
            or the low-key pedal boats.
          </p>
        </div>
      </div>

      {/*  ADD A COMMENT  */}
      <div className="add-comment">
        <h3 className='add-comment-title'>Add A Comment</h3>
        <div className="add-comment-box">
          <div className="add-comment-box-left">
            <Input
              label={"Name"}
              placeholder="Name..."
            />
            <Input
              label={"Website"}
              placeholder="Website..."
            />
            <Input
              label={"Email"}
              placeholder="Email..."
            />
          </div>
          <div className="add-comment-box-right">
            <Textarea
              label='Comment'
              placeholder='Search anything...'
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default index