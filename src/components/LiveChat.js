import React, { useState, useRef } from "react";

import firebase from 'firestore/app';
import 'firebase/firestore';
import 'firestore/auth';

import { useAuthState }  from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firbase-hooks/firestore';
import { async } from '@firebase/util';

firebase.initializeApp({
    apiKey: "AIzaSyCgKY2F20ogHqsCdEgqWqFC6gW2qhV2VOs",
    authDomain: "gishmaf-livechat.firebaseapp.com",
    projectId: "gishmaf-livechat",
    storageBucket: "gishmaf-livechat.appspot.com",
    messagingSenderId: "556404210465",
    appId: "1:556404210465:web:a0b1023a29022fd940dc60",
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function LiveChat() {
  return (
    <div>
      
    </div>
  )
}

function SignIn(){
    const signInwithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInwithPopup(provider);
    }

    return(
        <button onClick={signInwithGoogle}>Sign in with Google</button>
    )
}

function SignOut(){
    return auth.currentUser && (
        <button onClick={()=> auth.signOut()}>Sign Out</button>
    )
}

function ChatRoom() {

    const dummy = useRef()
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) =>{
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.fieldValue.serverTimestamp(),
            uid,
            photoURL
        });

        setFormValue('');

        dummy.Current.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <>
        <main>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message ={msg} />)}
            <div ref={dummy}></div>
        </main>

        <form onSubmit={sendMessage}>
           <input value={formValue} onChange={(e) =>setFormValue(e.target.value)} />

           <button type='submit'>Enter</button>     
        </form>
        </>
    )
}

function ChatMessage(props){
    const {text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return(
        <div className={`message ${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>

        </div>
    )
}

export default LiveChat

