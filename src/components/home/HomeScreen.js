import React from 'react'
import banner from '../../images/banner.jpeg'
import userImg from '../../images/userImg.jpeg'

export const HomeScreen = () => {
  return (
    <section className="home-screen">
      <aside className="aside__user-info">
        <img className="banner" src={ banner }/>

        <img className="userImg" src={ userImg }/>

        <div className="user-info__content">
          <div className="user-info__block-1">
            <h3>Steven Angel Coaila Zaa</h3>
            <p>
              Frontend Developer Student | Seeking Full-Time Software Engineer Job | Javascript & React
            </p>
          </div>

          <div className="user-info__block-2">
            <div>
              <p>Who viewed your profile</p>
              <span>82</span>
            </div>

            <div>
              <p>Views of your video</p>
              <span>310</span>
            </div>
          </div>

          <div className="user-info__block-3">
            <i class="ri-folder-fill"></i>
            <p>See all Premiun features</p>
          </div>

          <div className="user-info__block-4">
            <i class="ri-bookmark-fill"></i>
            <p>My items</p>
          </div>
        </div>
      </aside>

      <main className="main">

      </main>

      <aside className="aside__more-info">

      </aside>
    </section>
  )
}
