import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginWithGoogle from '../components/LoginWithGoogle';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const router = useRouter();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const password = e.target.querySelector("#password").value;
  
    try {
      const response = fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.ok) {
        router.push('/home');
      } else {
        console.error('Inicio de sesión no exitoso');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud de inicio de sesión:', error);
    }
  };
  return (
  <div className="pe">
    <div className="page">
      <div className="pge">
      <img className="imglogin"src="/assets/img/logo.png"  />
        <div className="Inicioc">
        <h2 className="h22">Iniciar sesión</h2>
        </div>
          <form onSubmit={handleSubmit}>
             <label className="labelcolor">
             <img src="/assets/img/usuario1.png" width="25" height="25" /> <input className="inputcolor" id="username" type="text" placeholder="‎ Usuario" value={user} onChange={handleUserChange} />
        </label>
        <br />
        <label className="labelcolor">
        <img src="/assets/img/clave1.png" width="25" height="25" />
           <input className="inputcolor" id="password" type="password" placeholder="‎ Contraseña" value={password} onChange={handlePasswordChange} />
        </label >
        <br />
        <label className="googlecolor">
        <img src="/assets/img/google.png" width="25" height="25" />
         <LoginWithGoogle />
        </label>
        <br/>
        <div className="columna">
        <button className="iniciobutton" type="submit">
          Iniciar sesión
        </button >
        <Link className= "volverbutton" href="./Principal">
          Volver a la home
        </Link>
        </div>
      </form>
      </div>
    </div>
  </div>
  );
}


    export default LoginPage;