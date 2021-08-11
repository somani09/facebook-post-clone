import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import './timeline.scss'
import postData from '../../data/postData'
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'

function Timeline() {

    const [realTimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp","desc")
    );

    return (
        <div className="timeline">
            <CreatePost />
            {realTimePosts?.docs.map((x,i)=>(
                <Post 
                    key={i}  
                    personName={x.data().name} 
                    date={x.data().timestamp} 
                    caption={x.data().message} 
                    profileImage={x.data().image} 
                    postImage={x.data().postImage}  
                    postGif={x.data().gif}  
                />
            ))

            }
            
        </div>
    )
}

export default Timeline
