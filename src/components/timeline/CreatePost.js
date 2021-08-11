import React, { useRef, useState } from 'react'
import './createPost.scss'
import postData from '../../data/postData'

import {AiOutlineFileGif} from 'react-icons/ai'
import {BsImages} from 'react-icons/bs'
import { db, storage } from '../../firebase'
import firebase from 'firebase'
import Giphy from './Giphy'
function CreatePost() {

    const imagePicker = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const [gifToPost, setGifToPost] = useState(null);
    const [caption, setCaption] = useState('');
    const [showGifBlock, setShowGifBlock] = useState(false);

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
            console.log("image",imageToPost)
        }
    }

    const addGifToPost = (e) => {

    }

    const removeImage = () => {
        setImageToPost(null);
    }

    const removeGif = () => {
        setGifToPost(null);
    }

    const uploadPost = () => {
        // if(imageToPost===null)

            if(gifToPost) {
                db.collection('posts').add({
                    message: caption,
                    name:'Vaibhav Somani',
                    email: 'vsomani2@gmail.com',
                    gif:gifToPost,
                    image:'https://graph.facebook.com/4522149344572667/picture?type=small',
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(doc=>{
                    if(imageToPost){
                        
                        const uploadTask = storage
                            .ref(`posts/${doc.id}`)
                            .putString(imageToPost, "data_url");
                        
                        removeImage();
                        console.log("worked!")
                        uploadTask.on(
                            "state_change",
                            null,
                            (error) => console.error(error),
                            () => {
                                storage
                                    .ref("posts")
                                    .child(doc.id)
                                    .getDownloadURL()
                                    .then((url) => {
                                        db.collection("posts").doc(doc.id).set(
                                            {
                                                postImage: url,
                                            },
                                            { merge:true }
                                        );
                                    });
                            }
                        );
                    }
                });
            }
            else
            {
                    db.collection('posts').add({
                    message: caption,
                    name:'Vaibhav Somani',
                    email: 'vsomani2@gmail.com',
                    image:'https://graph.facebook.com/4522149344572667/picture?type=small',
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(doc=>{
                    if(imageToPost){
                        
                        const uploadTask = storage
                            .ref(`posts/${doc.id}`)
                            .putString(imageToPost, "data_url");
                        
                        removeImage();
                        console.log("worked!")
                        uploadTask.on(
                            "state_change",
                            null,
                            (error) => console.error(error),
                            () => {
                                storage
                                    .ref("posts")
                                    .child(doc.id)
                                    .getDownloadURL()
                                    .then((url) => {
                                        db.collection("posts").doc(doc.id).set(
                                            {
                                                postImage: url,
                                            },
                                            { merge:true }
                                        );
                                    });
                            }
                        );
                    }
                });
            }
            setGifToPost(null);
            setCaption('');
    }



    return (
        <div className="createPost col">
                <div className="text-area row space-between align-center">
                    <img src={'https://graph.facebook.com/4522149344572667/picture?type=small'} className="person-pic" />
                    <textarea value={caption} onChange={e => setCaption(e.target.value)}  className="enter-text" placeholder="whats on your mind?"/>
                    <button onClick={uploadPost} style={{ visibility: caption!==''||imageToPost!==null||gifToPost!==null ? 'visible': 'hidden'}} className="submit-button">Post</button>
                </div>
                    {imageToPost &&
                    <div className="center-col">
                        <img src={imageToPost} className="previewImage" />  
                        <p onClick={removeImage} className="remove">Remove</p>
                    </div>
                          
                    }

                    {gifToPost &&
                    <div className="center-col">
                        <img src={gifToPost} className="previewImage" />  
                        <p onClick={removeGif} className="remove">Remove</p>
                    </div>
                          
                    }
                <div className="line"></div>
                <div className="content-area row space-evenly">
                    <div onClick={e=>setShowGifBlock(true)} className="gif row pointer"> 
                        <AiOutlineFileGif />
                        <p>GIF</p>
                    </div>
                    <div onClick={() => imagePicker.current.click()} className="image-upload row pointer">
                        <input ref={imagePicker} type="file" hidden onChange={addImageToPost}/>
                        <BsImages />
                        <p>Images</p>
                    </div>
                </div>
                <Giphy gifToPost={gifToPost} setGifToPost={setGifToPost} showGifBlock={showGifBlock} setShowGifBlock={setShowGifBlock} />
        </div>
    )
}

export default CreatePost
