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


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User:', user)
  };
    return (
      <div>
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Usuario:
            <input type="text" value={user} onChange={handleUserChange} />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange} />
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