import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyBHirKH-iMy1JK8uSXPiHXaEfh2KVoQQbQ",
    authDomain: "chatbot-e1e94.firebaseapp.com",
    databaseURL: "https://chatbot-e1e94-default-rtdb.firebaseio.com"
};


firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();