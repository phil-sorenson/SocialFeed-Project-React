/** 
* ToDo: Code it where the previous input goes away after clicking CREATE
** CreatePost == AddEntryForm (weight-tracker)
* ! Create a form with 2 input fields (1. w/ user's name 2. w/ the body of their posts) - each should be bound to it's own State variable
* ! Code it where the previous input goes away after clicking CREATE
*/

import React, { useState } from 'react';
import './CreatePosts.css';

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

        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' value= {name} onChange={(event)=> setName(event.target.value)}/>
            </div>
            <div className='form-group'>    
                <label>Post</label>
                <textarea rows='4' cols='50' type='text' value={post} onChange={(event)=> setPost(event.target.value) }/>
                <button type='submit' className='btn btn-primary' style={{'margin': '1em'}}>CREATE</button>
            </div>
        </form>
        

    );
}
 
export default CreatePosts;

