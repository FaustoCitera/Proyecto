import { useEffect, useState } from 'react';
import Link from 'next/link'
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
    
    console.log({username});
    console.log({password});

    
    fetch('http://localhost:3001/login', {
      method: 'POST',
      body: {
      username,
      password
      }
    }).then((r) => r.text())
      .then((d) => {
        console.log(d)
        //router.push('home') 
      })
      .catch((e) => {
        console.log(e)
      });
  
}
  return (
  <div className="pe">
    <div className="page">
      <div className="pge">
        <div className="Inicioc">
        <h2 className="h22">Iniciar sesión</h2>
        </div>
          <form onSubmit={handleSubmit}>
             <label className="labelcolor">
              <input className="inputcolor" id="username" type="text" placeholder="Usuario" value={user} onChange={handleUserChange} />
        </label>
        <br />
        <label className="labelcolor">
           <input className="inputcolor" id="password" type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        </label >
        <br />
        <label className="googlecolor">
         <LoginWithGoogle />
        </label>
        <br/>
        <div className="columna">
        <button className="iniciobutton" type="submit">
          Iniciar sesión
        </button >
        <Link className= "volverbutton" href="/Principal">
          Volver
        </Link>
        </div>
      </form>
      </div>
    </div>
  </div>
  );
}

    export default LoginPage;