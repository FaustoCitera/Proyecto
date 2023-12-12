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
    <div className='ppage'>
        <div className='ConfPosition'>
          <div className='fondoazul'>
      <h2 className='tituloconfig'>Configuración</h2>
      </div>
      <div className='ConfGeneral'>
      <img className="imagenpropotions" src="/assets/img/perfil.png"/>
      <div className='labelconfig'>       
        <label htmlFor="nombreUsuario"></label>
        <input 
        className="inputconfig"
        placeholder='Nombre de Usuario'
          type="text"
          id="username"
          value={nombreUsuario}
          onChange={handleNombreUsuarioChange}
        />
      </div>
      <div className='espaciolog'></div>
      <div className='labelconfig'>
        <label htmlFor="contrasena"></label>
        <input      
        className="inputconfig"
        placeholder='Contraseña'
          type="password"
          id="password"
          value={contrasena}
          onChange={handleContrasenaChange}
        />
      </div>
      <div className='espaciolog'></div>
      <div className='fondobutonconfig'>
      <button className='butonconfig' onClick={handleSubmit}>Guardar</button>
      </div>
      </div>
      </div>
      <div className='paddingbuttonconfig'>
      <Link className="VOLVERCONFIG" href="/home">
          Volver
        </Link>
        </div>
        </div>
    
  );
}