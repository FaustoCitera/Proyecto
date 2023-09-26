// components/ProfileMenu.js

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

  //const closeMenu = () => {
    //setIsOpen(false);
  //};

  const handleLogout = () => {
    router.push('authForm')
  };

  const handleSwitchToBusinessAccount = () => {
    // Aquí puedes implementar la lógica para cambiar a la cuenta de negocio
    // Por ejemplo, cambiar el tipo de cuenta y redirigir a la página de negocio
    console.log('Cambiar a Cuenta de Negocio');
  };

  const handleSettings = () => {
    router.push('config')
  };

  return (
    <div className="profile-menu">
      <FontAwesomeIcon icon={faUser} onClick={toggleMenu} />
      {isOpen && (
        <div className="menu-options">
            <button onClick={handleLogout}>Cerrar Sesión</button>
            <button onClick={handleSwitchToBusinessAccount}>Cambiar a Cuenta de Negocio</button>
            <button onClick={handleSettings}>Configuración</button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;