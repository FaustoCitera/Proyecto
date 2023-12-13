import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import LoginWithGoogle from '../components/LoginWithGoogle';


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const email = e.target.querySelector("#email").value;
    const password = e.target.querySelector("#password").value;

    const body = JSON.stringify({
      username,
      email,
      password
    });

    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    }).then((response) => {
      if (response.ok) {
        console.log('Todo bien');
        alert("Usuario " + username + " creado correctamente")
        router.push('/home'); 
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        alert("error")
      }
    })
    .catch((error) => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    })
  };
    return (
      <div className="page">
        <div className="pge" >
        <img className="imglogin" src="/assets/img/logo.png" />
        <div className="Iniciosign">
        <h2 className="h22">Crear cuenta</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="labelcolor">
          <img src="/assets/img/email1.png" width="25" height="25" />
            <input className="inputcolor" type="email" id="email"placeholder="‎ Email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label className="labelcolor">
          <img src="/assets/img/usuario1.png" width="25" height="25" />
            <input className="inputcolor" type="text" id="username" placeholder="‎ Usuario" value={user} onChange={handleUserChange} />
          </label>
          <br />
          <label className="labelcolor">
          <img src="/assets/img/clave1.png" width="25" height="25" />
            <input className="inputcolor" type="password" id="password" placeholder="‎ Contraseña" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <label className="googlecolor">
          <img src="/assets/img/google.png" width="25" height="25" />
          <LoginWithGoogle />
        </label>
        <br />
        <div className="columna">
          <button className="iniciobutton" type="submit">Crear cuenta</button>
          <Link className="volverbutton" href="./Principal">
            Volver a la home
          </Link>
          </div>
        </form>
        </div>
      </div>
      
    );
  };

export default SignUpPage;