import firebase from "firebase/compat"

require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyBNQmnt0AtlE57QHceN_KTJxwZUDQ5E0Qw",
  authDomain: "himanshu-sos.firebaseapp.com",
  projectId: "himanshu-sos",
  storageBucket: "himanshu-sos.appspot.com",
  messagingSenderId: "534917219272",
  appId: "1:534917219272:web:ab9ad5697204a26b5a36fd",
  measurementId: "G-2V4KCHPS9R"
};
  
  // Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore()