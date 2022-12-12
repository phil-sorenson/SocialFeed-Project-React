import React, { useState } from 'react'
import CreatePosts from './Components/CreatePosts/CreatePosts';

import './App.css';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [entries, setEntries] = useState([{'name': 'Phil S' , 'post': 'Hello'}]);

  function createPost(post) {
    let tempPost = [post,...entries];

    setEntries(tempPost);
  }


  return (
    <div>
      <div>
        <NavBar/>
      </div>  
      <div className='create-post-container'>
        <CreatePosts createPost= {createPost} />
      </div>
      <div className='message-board-container'>  
        <DisplayPosts entries= {entries}/>
      </div>
    </div>
  

  );
}

export default App;