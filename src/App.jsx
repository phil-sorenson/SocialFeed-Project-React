import React, { useState } from 'react'
import CreatePosts from './Components/CreatePosts/CreatePosts';
import Post from './Components/Posts/Post';
import './App.css';

function App() {

  const [posts, setPosts] = useState([{'name': 'Phil S' , 'post': 'Hello'}]);

  function createPost(post) {
    let tempPost = [post,...posts];

    setPosts(tempPost);
  }


  return (
    <div>  
      <div className='border-box'>
        <CreatePosts createPostProperty= {createPost} />
      </div>
      <div className='border-box'>  
        <Post posts= {posts}/>
      </div>
    </div>
  

  );
}

export default App;