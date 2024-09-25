import React, {useState} from "react";
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom"
const Register = () => {
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName); // it will be added like this; kemal.jpg
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => { // if there is any error
                    setError(true)
                },
                () => {
                    // authentication process
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => { // when upload the image it returns its downland url
                        await updateProfile(res.user, { // it updates the users name and photo url
                            displayName,
                            photoURL: downloadURL
                        });
                        // add the user to the firebase database, so we can retrieve the user data when needed
                        await setDoc(doc(db, 'users', res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL
                            // we are not going to use password here that because we going to use that users collection to see other users
                        });

                        await setDoc(doc(db, 'userChats', res.user.uid),{}) // it collects users chats
                        navigate('/')

                    });
                }
            );

        } catch {
            setError(true)
        }

    }
    return(
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Chat App</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="display name" />
                    <input type='email' placeholder="email"/>
                    <input type='password' placeholder="password"/>
                    <input style={{display:"none"}} type='file' id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" className="addImg" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {error && <span>Something went wrong</span>}
                </form>
                <p>Do you have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register
