import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
const firebaseConfig = {
    apiKey: 'AIzaSyDn-Msfd7fYNsnaNvvV3tL-Yd7ZFcZVAec',
    authDomain: 'react-native-project1-987fb.firebaseapp.com',
    projectId: 'react-native-project1-987fb',
    databaseURL: 'https://react-native-project1-987fb.firebaseio.com',
    storageBucket: 'react-native-project1-987fb.appspot.com',
    messagingSenderId: '626409029615',
    appId: '1:626409029615:android:2bdfd17df07d2485b4001a',
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //retreieved the info

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ //sent information to the db
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const providers = new firebase.auth.FacebookAuthProvider();


provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(providers);



export {firebase};