// components/ProfileMenu.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //const closeMenu = () => {
    //setIsOpen(false);
  //};

  const handleLogout = () => {
    <Link href="/authForm"></Link>
    console.log('Cerrar Sesión');
  };

  const handleSwitchToBusinessAccount = () => {
    // Aquí puedes implementar la lógica para cambiar a la cuenta de negocio
    // Por ejemplo, cambiar el tipo de cuenta y redirigir a la página de negocio
    console.log('Cambiar a Cuenta de Negocio');
  };

  const handleSettings = () => {
    // Aquí puedes implementar la lógica para la página de configuración
    // Por ejemplo, redirigir a la página de configuración
    console.log('Configuración');
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