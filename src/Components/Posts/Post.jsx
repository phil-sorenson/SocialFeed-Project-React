/**
 * 
 * Todo: Isolate the like button functionality to one specific post entry instead of every button on every posts turning green
 * ToDo: Style how each post will look => text alignment (canter it in its box), font size, etc => card or stacks (material UI)
 * ToDo: Make the like button smaller or get rid of the border possibly
** Within the “Post” component create a template of how you would like each individual post to be displayed. 
** This will include the USER'S NAME, THE BODY of the post, and the “like” and “dislike” buttons. 
** similar to DisplayEntries.jsx (weight tracker)
** Will have to import CreatePosts.jsx and take in the variables name & post
*/
import React, { useState } from 'react'
import './Post.css';
import ToggleButton  from '@mui/material/ToggleButton';
import ThumbUpOffAlt  from '@mui/icons-material/ThumbUpOffAlt';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const Post = (props) => {

    const [selected,setSelected] = useState(false)
    // const customTheme = createTheme({
    //     palette: {
    //         primary: {
    //             main: darkslategray[2f4f4f],


    //         },
    //     },
    // });

    // const StyledToggleButton = styled(ToggleButton)

    return ( 

            
        <div className='container'>
            {props.entries.map((post, index) =>{
                return (
                <div key={index}>    
                    <div id='name'>
                        {post.name}
                    </div>
                    <br/>
                    <div id='post-body'>
                        {post.post}
                    </div>
                    <div >
                        <ToggleButton className='toggle-button' value="thumb-up-off-alt" selected={selected} onChange={() => {setSelected(!selected);}}>
                            <ThumbUpOffAlt className='thumb'/>
                        </ToggleButton>
                    </div>
                    <hr/>
                    <br/>
                </div>
                                        
                )
            })}
        </div>
    
    
    
    
     );
};
 
export default Post;

