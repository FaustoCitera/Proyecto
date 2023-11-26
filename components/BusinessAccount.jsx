import React, { useState } from 'react';

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
      const response = await fetch('http://localhost:3001/api/business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(business),
      });

      if (response.ok) {
        console.log('Negocio agregado con éxito');
        // Puedes redirigir o realizar otras acciones después de agregar el negocio
      } else {
        console.error('Error al agregar el negocio');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <h1>Cuenta de Negocio</h1>
      <form>
        <label>
          Nombre del Negocio:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Ubicación:
          <input type="text" name="location" onChange={handleChange} />
        </label>
        <br />
        <label>
          Producto o Servicio:
          <input type="text" name="productOrService" onChange={handleChange} />
        </label>
        <br />
        <label>
          Nombre del Dueño:
          <input type="text" name="owner" onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Agregar Negocio
        </button>
      </form>
    </div>
  );
};

export default BussinesAccount;
