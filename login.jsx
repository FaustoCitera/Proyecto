import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

const LoginPage = () => {
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
    fetch('http://localhost:3001/login', {
      method: 'POST',
      body: {
      username,
      password
      }
    }).then((r) => r.text())
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
      
      router.push('home')

      };

  return (
    <div className="generalCard">
      <div className="cardheader">
        <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
        <label className="emailtxt"> 
          Email:
          <input id="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </label> 
        <br />
        <label className="usuariotxt">
          Usuario:
          <input id="username" type="text" placeholder="Usuario" value={user} onChange={handleUserChange} />
        </label>
        <br />
        <label className="contrasenatxt">
          Contraseña:
          <input id="password" type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">
          Iniciar sesión
        </button>
        <Link href="/Principal">
          Volver
        </Link>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;