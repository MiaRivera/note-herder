import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDG6TVPYngQqNXRTMs-cfzWABnIp71TuyY",
    authDomain: "noteherder-953be.firebaseapp.com",
    databaseURL: "https://noteherder-953be.firebaseio.com",
    projectId: "noteherder-953be",
    storageBucket: "",
    messagingSenderId: "378766636580"
})

const db = database(app)

export default Rebase.createClass(db)