import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    e.preventDefault();
    fetch('http://localhost:3001/signout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        console.log('Todo bien');
        alert("Sign out correcto")
        router.push('/home'); 
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        alert("error")
      }
    })
    .catch((error) => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    })
  };

  const handleSwitchToBusinessAccount = () => {
    router.push('usuarioNegociador');
  };

  const handleSwitchToReseña = () => {
    router.push('home');
  };

  const handleSettings = () => {
    router.push('config');
  };

  // Verifica la ruta actual
  const isHome = router.pathname === '/home';
  const isUsuarioNegociador = router.pathname === '/usuarioNegociador';

  return (
    <div className="profile-menu">
      <div className='fondoazul'>
        <div className='titulohomelog'>
      <FontAwesomeIcon icon={faUser} onClick={toggleMenu} />
      </div>
      </div>
      <div className='titulohome'>
      {isOpen && (
        <div className="menu-options">
          <div className='botonfondo'>
          <button className="butoncuenta" onClick={handleLogout}>Cerrar Sesión</button>
          </div>
          <div className="espacioez" ></div>

          <div className='botonfondo'>
          {isUsuarioNegociador && (
            <button className="butoncuenta" onClick={handleSwitchToReseña}>Cambiar a Cuenta de Reseñador</button>
          )}
          </div>
          <div className='botonfondo'>
          {isHome && (
            <button className="butoncuenta" onClick={handleSwitchToBusinessAccount}>
              Cambiar a Cuenta de Negocio
            </button>
          )}
          </div>
          <div className="espacioez" ></div>
          <div className='botonfondo'>
          <button className="butoncuenta" onClick={handleSettings}>Configuración</button>
        </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ProfileMenu;
