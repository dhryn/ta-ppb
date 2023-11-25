import React from 'react'
import './Profile.css'
import userImg from '../images/profile.png'

function Profile({reference}) {
  return (
    <section id="profile" className="profile" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1 className='myProfile'>My Profile</h1>
        </div>
        <div className="row">
          <div className="profilePicture">
            <img src={userImg} alt="ProfilePhoto" />
          </div>
          <div className="about">
            <h4>Hi, my name is Maulid but you can call me Iyan, I'm  making this website for my Final Project, a little fact about me, I'm not deeply into to HTML, CSS or even JavaScript, but i like to learning new things, and I use all of them for this project. I hope you who visit this website can enjoy what I made</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile