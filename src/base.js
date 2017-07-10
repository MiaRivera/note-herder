import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDG6TVPYngQqNXRTMs-cfzWABnIp71TuyY",
    authDomain: "noteherder-953be.firebaseapp.com",
    databaseURL: "https://noteherder-953be.firebaseio.com",
    projectId: "noteherder-953be",
    storageBucket: "",
    messagingSenderId: "378766636580"
})

const db = database(app)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = app.auth()

export default Rebase.createClass(db)