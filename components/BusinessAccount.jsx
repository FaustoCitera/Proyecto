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
    const name = e.target.querySelector("#nombre").value;
    const location = e.target.querySelector("#ubicacion").value;
    const owner = e.target.querySelector("#dueño").value;
    const productOrService = e.target.querySelector("#producto").value;
    const img = e.target.querySelector("#imagen").value;
      fetch('http://localhost:3001/business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          location,
          owner,
          productOrService,
          img,
        }),
      });
      
  };

  return (
      <form>
      <div className='Account'>
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' id='nombre' placeholder="Nombre del Negocio"type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' id='ubicacion' placeholder="Ubicación" type="text" name="location" onChange={handleChange} />
        </label>
        <br />
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' id='dueño' placeholder="Nombre Del Dueño" type="text" name="dueño" onChange={handleChange} />
        </label>
        <br />
        <label className='labelcolorAcountProduct'>
          <input className='inputcolorAcount' id='producto' placeholder="Describe tu negocio..." type="text" name="productOrService" onChange={handleChange} />
        </label>
        <br/>
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' id='imagen' type="file" onChange={handleChange} />
        </label>
        <br />
        <div className='labelcolorbuton'>
        <button className='inputcolorbuton' type="button" onClick={handleSubmit}>
          Crear Negocio
        </button>
        </div>
        </div>
    
      </form>

  );
};

export default BussinesAccount;
