/**
 * ToDo: Style it so the name is above the post (As of now: "Phil S Hello")
 * ToDo: Figure out my thumbs up/down (does not want to toggle up or down)
** Within the “Post” component create a template of how you would like each individual post to be displayed. 
** This will include the USER'S NAME, THE BODY of the post, and the “like” and “dislike” buttons. 
** similar to DisplayEntries.jsx (weight tracker)
** Will have to import CreatePosts.jsx and take in the variables name & post
*/

import './Post.css';

const Post = (props) => {
    
    const handleLikeClick = () => {
        
        if (activeBtn === "none") {
            setLikeCount (likeCount +1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === 'like'){
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
          }
        
        if (activeBtn === "dislike") {
        setLikeCount(likeCount + 1);
        setDislikeCount(dislikeCount - 1);
        setActiveBtn("like");
        }
    };

    const handleDislikeClick = () => {
        
        if (activeBtn === "none") {
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === 'dislike') {
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "like") {
        setDislikeCount(dislikeCount + 1);
        setLikeCount(likeCount - 1);
        setActiveBtn("dislike");
        }
    };


      
    
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
                    <div className='btn-container'>
                        <button className={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={handleLikeClick}><span className='material-symbols-rounded'>thumbs_up</span>Like{{likeCount}}</button>
                        <button className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={handleDislikeClick}><span className='material-symbols-rounded'>thumbs_down</span>Dislike{{dislikeCount}}</button>

                    </div>
                    <hr/>
                    <br/>
                </div>
                                        
                )
            })}
        </div>
    
    
    
    
     );
}
 
export default Post;

