/**
 * ToDo: Style it so the name is above the post (As of now: "Phil S Hello")
 * 
** Within the “Post” component create a template of how you would like each individual post to be displayed. 
** This will include the USER'S NAME, THE BODY of the post, and the “like” and “dislike” buttons. 
** similar to DisplayEntries.jsx (weight tracker)
** Will have to import CreatePosts.jsx and take in the variables name & post
*/


const Post = (props) => {
    

    
    return ( 
    <table>
        <div>
            {props.posts.map((post) =>{
                return (
                <div>    
                    <div id='name'>
                        <td>{post.name}</td>
                    </div>
                    <div id='post-body'>
                        <td>{post.post}</td>
                    </div>
                </div>                             
                )
            })}
        </div>
    </table>
    
     );
}
 
export default Post;

// function likeButton(response){

// }

// function dislikeButton(response){

// }