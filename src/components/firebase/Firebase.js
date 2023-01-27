import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC8vf8enfpceybHzlBzemy5x_FjATfEizM",
  authDomain: "imgur-b474b.firebaseapp.com",
  databaseURL: "https://imgur-b474b-default-rtdb.firebaseio.com",
  projectId: "imgur-b474b",
  storageBucket: "imgur-b474b.appspot.com",
  messagingSenderId: "969231727957",
  appId: "1:969231727957:web:1a202d74fcc18ddeb103dc"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase()
export {db}
// firebase.initializeApp(firebaseConfig);
// export const dataref = firebase.database()
// export default firebase;