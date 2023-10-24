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

  const handleGuardarConfiguracion = () => {
    // Aquí puedes agregar lógica para guardar los cambios en el nombre de usuario y contraseña.
    // Puedes realizar una llamada a una API o utilizar el almacenamiento local, dependiendo de tus necesidades.
    console.log('Nombre de usuario actualizado:', nombreUsuario);
    console.log('Contraseña actualizada:', contrasena);
  };

  return (
    <div>
      <h2>Configuración</h2>
      <div>
        <label htmlFor="nombreUsuario">Nombre de usuario:</label>
        <input
          type="text"
          id="nombreUsuario"
          value={nombreUsuario}
          onChange={handleNombreUsuarioChange}
        />
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="contrasena"
          value={contrasena}
          onChange={handleContrasenaChange}
        />
      </div>
      <button onClick={handleGuardarConfiguracion}>Guardar Configuración</button>
      <Link href="/home">
          Volver
        </Link>
    </div>
  );
}