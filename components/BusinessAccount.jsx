import React, { useState } from 'react';
import "../public/globals.css";

const BussinesAccount = () => {
  const [business, setBusiness] = useState({
    name: '',
    location: '',
    productOrService: '',
    owner: '',
  });

  const handleChange = (e) => {
    setBusiness({
      ...business,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = fetch('http://localhost:3001/business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(business),
      });

      if (response.ok) {
        console.log('Negocio agregado con éxito');
      } else {
        console.error('Error al agregar el negocio');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
      <form>
      <div className='Account'>
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' placeholder="Nombre del Negocio"type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' placeholder="Ubicación" type="text" name="location" onChange={handleChange} />
        </label>
        <br />
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' placeholder="Nombre Del Dueño" type="text" name="location" onChange={handleChange} />
        </label>
        <br />
        <label className='labelcolorAcountProduct'>
          <input className='inputcolorAcount' placeholder="Producto o Servicio" type="text" name="productOrService" onChange={handleChange} />
        </label>
        <br/>
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' type="file" onChange={handleChange} />
        </label>
        <br />
        <div className='labelcolorAcount'>
        <button className='inputcolorAcount' type="button" onClick={handleSubmit}>
          Crear Negocio
        </button>
        </div>
        </div>
    
      </form>

  );
};

export default BussinesAccount;
