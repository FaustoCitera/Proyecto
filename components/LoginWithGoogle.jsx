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
      await signInWithPopup(auth, provider);
      router.push('home')
    } catch (error) {

      //es aca el redireccionar

      console.error(error);
    }
  };

  return (
    <button onClick={handleLogin}>‎ Iniciar sesión con Google</button>
  );
}
// // Función para iniciar sesión con correo electrónico y contraseña
// export const signInWithEmail = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Inicio de sesión exitoso
//       const user = userCredential.user;
//       const name = user.displayName;
//       const profilePic = user.photoURL;
      
//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);

//       alert("Log in exitoso");
//        {
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       alert("La contraseña o el correo electrónico son incorrectos");
//     });
// };
// // Función para registrar un nuevo usuario
// export const registerUser = (email, password) => {
//   auth.createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // Usuario registrado exitosamente
//       const user = userCredential.user;
//       console.log('Usuario registrado:', user);
//       alert('Usuario registrado exitosamente');
//     })
//     .catch((error) => {
//       console.error('Error al registrar usuario:', error.message);
//       alert('Error al registrar usuario: ' + error.message);
//     });
// };
export default Login;