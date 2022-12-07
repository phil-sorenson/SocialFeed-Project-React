import React, { useState } from 'react'
import CreatePosts from './Components/CreatePosts/CreatePosts';


function App() {

  const [posts, setPosts] = useState([{}]);

  function createPost(post) {
    let tempPost = [...post, posts];

    setPosts(tempPost);
  }


  return (
    <div>
    
      <CreatePosts createPostProperty={createPost} />
    </div>
  

  );
}

export default App;