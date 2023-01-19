import React from 'react'

//* Sytle *// 
import style from './SharePost.module.css'

//* Images *// 
import profileImg from '../../images/rafe-widget-profile.png'
import bodyImag from '../../images/rafe-widget-main.png'

const SharePost = () => {
  return (
    <div className={style.sharePost} >
      {/* Header */}
      <div className={style.sharePost__header} >
        <img src={profileImg} alt="profile widget image" className={style.sharePost__img} />

        <div>
          <h5 className={style.sharePost__name} >Rafe Qazi</h5>
          <span className={style.sharePost__username} >@CeleverQazi</span>
        </div>
      </div>

      {/* Body */}
      <div className={style.sharePost__body}>
        <p>Learn python quickly and join us. I have over 15,000 student and get started today!</p>

        <figure className={style.sharePost__bodyImg} >
          <img src={bodyImag} alt="body image" />
        </figure>

        <p>9:48AM, Apr 30, 2022</p>
      </div>

      {/* Footer */}
      <footer className={style.sharePost__footer} ></footer>
    </div>
  )
}

export default SharePost