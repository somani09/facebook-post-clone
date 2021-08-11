import React from 'react'
import './post.scss'
import {AiOutlineLike} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'

function Post({personName, date, caption, profileImage, postImage, postGif}) {

    return (
        <div className="post col ">
            <div className="name-area row">
                <img src={profileImage} className="person-pic" />
                <div className="name-date col">
                    <p>{personName}</p>
                    <p>{new Date(date?.toDate()).toLocaleDateString() }</p>
                </div>
            </div>

            <div className="caption-area">
                {caption} 
            </div>
            {
                postImage&&<img src={postImage} className="post-pic" />
            }
            
            {
                postGif&&<img src={postGif} className="post-pic" />
            }

            <div className="like-area row space-evenly">
                <div className="row center">
                    <AiOutlineLike className="like-comment" />
                    <p>Like</p>
                </div>
                <div className="row center">
                    <BiComment className="like-comment" />
                    <p>Comment</p>
                </div>
            </div>
        </div>
    )
}

export default Post
