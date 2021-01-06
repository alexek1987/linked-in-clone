import React, { useState } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventIcon from '@material-ui/icons/Event';
import InputOption from "./InputOption"
import Post from "./Post"


function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = e => {
    e.preventDefault();


    setPosts([])
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text"/>
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption
           Icon={ImageIcon}
           title="Photo"
           color="#70B5F9"
           />

           <InputOption
           Icon={SubscriptionIcon}
           title="Video"
           color="#ED3833"
           />

           <InputOption
           Icon={EventIcon}
           title="Event"
           color="#C0C8CD"
           />

           <InputOption
           Icon={CreateIcon}
           title="Write"
           color="#D9E1CC"
           />
        </div>

      </div>

      {posts.map((post) => (
        <Post />
        ))}



    </div>
  )
}

export default Feed;