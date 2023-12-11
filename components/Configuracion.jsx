// components/Configuracion.js
import { useState } from 'react';
import Link from 'next/link'

export default function Configuracion() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleNombreUsuarioChange = (event) => {
    setNombreUsuario(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const password = e.target.querySelector("#password").value;
    fetch('http://localhost:3001/config', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ( {
      username,
      password,
      }),
    });
    router.push('/home');
  }; 

  return (
    <div>
      <h2>Configuración</h2>
      <img src="/assets/img/perfil.png"/>
      <div>
        <label htmlFor="nombreUsuario">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={nombreUsuario}
          onChange={handleNombreUsuarioChange}
        />
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={contrasena}
          onChange={handleContrasenaChange}
        />
      </div>
      <button onClick={handleSubmit}>Guardar Configuración</button>
      <Link href="/home">
          Volver
        </Link>
    </div>
  );
}