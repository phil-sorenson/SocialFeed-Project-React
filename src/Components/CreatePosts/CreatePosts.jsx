/** 
* ToDo: Code it where the previous input goes away after clicking CREATE
* ToDo: Style => => Create Button, Align text boxes, figure out what kind of stye
** CreatePost == AddEntryForm (weight-tracker)
* ! Create a form with 2 input fields (1. w/ user's name 2. w/ the body of their posts) - each should be bound to it's own State variable
* ! Code it where the previous input goes away after clicking CREATE
*/

import React, { useState } from 'react';
import './CreatePosts.css';
import Form from 'react-bootstrap/Form'

import Button from '@mui/material/Button';


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

        
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' value= {name} onChange={(event)=> setName(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Create Post Here</Form.Label>
                <Form.Control type='text' as="textarea" rows={3} value={post} 
                onChange={(event)=> setPost(event.target.value) } />
            </Form.Group>
            <Button type='submit' variant="contained" style={{'marginLeft':'1em'}}>Create</Button>
        </Form>
        


        // <form  onSubmit={handleSubmit} className='entry-form-container'>
        //     <div className='name-component'>
        //         <label>Name</label>
        //         <input style={{'margin':'1em'}} type='text' value= {name} onChange={(event)=> setName(event.target.value)}/>
        //     </div>
        //     <div className='post-component'>    
        //         <label>Post</label>
        //         <textarea className='post' type='text' placeholder="Post Here" style={{ 'margin-left': '1em' }} value={post} 
        //         onChange={(event)=> setPost(event.target.value) }/>
        //         <Button type='submit' variant="contained" style={{'margin-left':'1em'}}>Create</Button>
                
        //     </div>
        // </form>
        

    );
}
 
export default CreatePosts;

