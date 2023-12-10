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
    router.push('authForm');
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
        <div className='titulohome'>
      <FontAwesomeIcon icon={faUser} onClick={toggleMenu} />
      </div>
      </div>
      <div className='titulohome'>
      {isOpen && (
        <div className="menu-options">
          <button className="butoncuenta" onClick={handleLogout}>Cerrar Sesión</button>
          {isUsuarioNegociador && (
            <button onClick={handleSwitchToReseña}>Cambiar a Cuenta de Reseñador</button>
          )}
          {isHome && (
            <button className="butoncuenta" onClick={handleSwitchToBusinessAccount}>
              Cambiar a Cuenta de Negocio
            </button>
          )}
          <button className="butoncuenta" onClick={handleSettings}>Configuración</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default ProfileMenu;
