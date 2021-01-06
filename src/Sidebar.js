import React from 'react'
import { Avatar } from '@material-ui/core';
import './Sidebar.css'

function Sidebar() {


  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
   );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://source.unsplash.com/random" alt=""/>
        <Avatar className="sidebar__avatar" />
        <h2>Alex</h2>
        <h4>alex@alex.com</h4>
      </div>

     <div className="sidebar__stats">
      <div className ="sidebar__stat">
        <p>Who view you</p>
        <p className="sidebar__statNum">343</p>
      </div>

      <div className ="sidebar__stat">
        <p>Viewed on post</p>
        <p className="sidebar__statNum">564</p>
      </div>
     </div>

     <div className="sidebar__bottom">
      <p>Recent</p>
        {recentItem('react.js')}
        {recentItem('ruby')}
        {recentItem('firebase')}
        {recentItem('freelancing')}
     </div>
    </div>
  )
}

export default Sidebar;