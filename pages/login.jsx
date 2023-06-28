import { useState } from 'react';
import Link from 'next/link'
import LoginWithGoogle from '../components/LoginWithGoogle';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

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
    const response = await fetch('localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, user, password}),
    });
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
            Usuario:
            <input type="text"placeholder="Usuario" value={user} onChange={handleUserChange} />
          </label>
          <br />
        <label>
          Contraseña:
          <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
        <Link href="/Principal">
        Volver
      </Link>
      </form>
      <LoginWithGoogle />
    </div>
  );
};

export default LoginPage;