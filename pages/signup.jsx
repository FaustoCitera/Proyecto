import { useState } from 'react';
import Link from 'next/link'


const SignUpPage = () => {
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
    const response = await fetch('localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, user, password}),
    });

  };
    return (
      <div>
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email"placeholder="Email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Usuario:
            <input type="text" placeholder="Usuario" value={user} onChange={handleUserChange} />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password"placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Crear cuenta</button>
          <Link href="/Principal">
            Volver
          </Link>
        </form>
      </div>
    );
  };


export default SignUpPage;