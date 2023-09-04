import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_7E8_Ynnjhqf1dcGG5TJ7yx-mqyvPgH0",
  authDomain: "critic-2f517.firebaseapp.com",
  projectId: "critic-2f517",
  storageBucket: "critic-2f517.appspot.com",
  messagingSenderId: "360470519687",
  appId: "1:360470519687:web:20bffc7f5f726c2c163d22",
  measurementId: "G-PBNB27WGFK"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogin}>Iniciar sesión con Google</button>
  );
}

export default Login;
