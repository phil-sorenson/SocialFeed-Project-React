//* CreatePost == AddEntryForm (weight-tracker)
// Todo: Create a form with 2 input fields (1. w/ user's name 2. w/ the body of their posts) - each should be bound to it's own State variable

import React, { useState } from 'react';

const CreatePosts = (props) => {
   
    const [name, setName] = useState('');
    const[post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        let newPost = {
            name: name,
            post: post  
        };

        console.log(newPost);
        props.createPostProperty(newPost)
    }
//* event.target.value is the value that is being inputted and 
    return ( 
        <div>
            <form onSubmit={handleSubmit} className='form-grid'>
            <label>Name</label>
            <input type='text' value= {name} onChange={(event)=> setName(event.target.value)}/>
            <label>Post</label>
            <textarea rows='4' cols='50' value={post} onChange={(event)=> setPost(event.target.value) }></textarea>
            <button type='submit' className='btn btn-primary'>CREATE</button>
            </form>
        </div>

    );
}
 
export default CreatePosts;

