import React, { useState } from 'react'
import CreatePosts from './Components/CreatePosts/CreatePosts';
import Post from './Components/Posts/Post';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{'name': 'Phil S' , 'post': 'Hello'}]);

  function createPost(post) {
    let tempPost = [post,...entries];

    setEntries(tempPost);
  }


  return (
    <div>  
      <div className='border-box'>
        <CreatePosts createPost= {createPost} />
      </div>
      <div className='border-box'>  
        <Post entries= {entries}/>
      </div>
    </div>
  

  );
}

export default App;