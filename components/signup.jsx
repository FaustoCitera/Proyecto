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
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      body: {
      username,
      email,
      password
      }
    }).then((r) => r.text())
      .then((d) => console.log(d))
      .catch((e) => console.log(e));
    router.push('home');

  };
    return (
      <div>
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" id="email"placeholder="Email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Usuario:
            <input type="text" id="username" placeholder="Usuario" value={user} onChange={handleUserChange} />
          </label>
          <br />
          <label>
            Contraseña:
            <input class="contrasea"type="password" id="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <LoginWithGoogle />
          <br />
          <button class="crear-mi-cuenta" type="submit">Crear cuenta</button>
          <Link href="/Principal">
            Volver
          </Link>
        </form>
      </div>
    );
  };

export default SignUpPage;