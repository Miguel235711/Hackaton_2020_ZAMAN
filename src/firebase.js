import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDvCodC9i0xVesTXr6UpUmtq2Ykd622dgc",
    authDomain: "hackaton-2020-800b1.firebaseapp.com",
    databaseURL: "https://hackaton-2020-800b1.firebaseio.com",
    projectId: "hackaton-2020-800b1",
    storageBucket: "hackaton-2020-800b1.appspot.com",
    messagingSenderId: "769326052713",
    appId: "1:769326052713:web:509132750ecd13f66db9f8",
    measurementId: "G-K1G1J1MJWD"
  };
firebase.initializeApp(firebaseConfig)
const firestoreRef = firebase.firestore()
firestoreRef.settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
})
firestoreRef.enablePersistence()
export default firebase