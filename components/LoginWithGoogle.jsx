import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'next/router';

const firebaseConfig = {
  apiKey: "AIzaSyB_7E8_Ynnjhqf1dcGG5TJ7yx-mqyvPgH0",
  authDomain: "critic-2f517.firebaseapp.com",
  projectId: "critic-2f517",
  storageBucket: "critic-2f517.appspot.com",
  messagingSenderId: "360470519687",
  appId: "1:360470519687:web:20bffc7f5f726c2c163d22",
  measurementId: "G-PBNB27WGFK"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

const Login = () => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Guarda información del usuario en el localStorage
      localStorage.setItem('currentUser', JSON.stringify({
        name: user.displayName,
        email: user.email,
        profilePic: user.photoURL,
      }));

      router.push('home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogin}>‎ Iniciar sesión con Google</button>
  );
}

export default Login;
