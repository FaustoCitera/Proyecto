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

    alert("corriendo")
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const email = e.target.querySelector("#email").value;
    const password = e.target.querySelector("#password").value;

    const body = JSON.stringify({
      username,
      email,
      password
    });

    console.log(body);

    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    }).then((r) => r.text())
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
    //router.push('home');

  };
  return (
    <div className="page">
      <div className="Iniciosign">
        <h2 className="h22">Crear cuenta</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="labelcolor">
          <input className="inputcolor" type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label className="labelcolor">
          <input className="inputcolor" type="text" id="username" placeholder="Usuario" value={user} onChange={handleUserChange} />
        </label>
        <br />
        <label className="labelcolor">
          <input className="inputcolor" type="password" id="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label className="googlecolor">
          <LoginWithGoogle />
        </label>
        <br />
        <div className="columna">
          <button className="iniciobutton" type="submit">Crear cuenta</button>
          <Link className="volverbutton" href="/Principal">
            Volver a la home
          </Link>
        </div>
      </form>
    </div>

  );
};

export default SignUpPage;