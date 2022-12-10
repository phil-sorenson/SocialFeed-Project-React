/** 
* ToDo: Code it where the previous input goes away after clicking CREATE
* ToDo: Style => => Create Button, Align text boxes, figure out what kind of stye
** CreatePost == AddEntryForm (weight-tracker)
* ! Create a form with 2 input fields (1. w/ user's name 2. w/ the body of their posts) - each should be bound to it's own State variable
* ! Code it where the previous input goes away after clicking CREATE
*/

import React, { useState } from 'react';
import './CreatePosts.css';
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
// import Stack from '@mui/material.Stack';

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
        props.createPost(newPost)
    }
//* event.target.value is the value that is being inputted and 
    return ( 

        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input style={{'margin':'1em'}} type='text' value= {name} onChange={(event)=> setName(event.target.value)}/>
            </div>
            <div className='form-group'>    
                <label>Post</label>
                <TextareaAutosize type='text' aria-label="minimum height" minRows={3} placeholder="Post Here" style={{ width: 200, 'margin-left': '1em' }} value={post} 
                onChange={(event)=> setPost(event.target.value) }/>
                <Button type='submit' variant="contained" style={{'margin-left':'1em'}}>Create</Button>
                {/* <button type='submit'  style={{'margin': '1em','fontSize':'5'}}>CREATE</button> */}
            </div>
        </form>
        

    );
}
 
export default CreatePosts;

