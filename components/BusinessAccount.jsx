import React, { useState } from 'react';
import "../public/globals.css";
import Reviewer from "./Reviewer";

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
      })
      .then((response) => {
        if (response.ok) {
          console.log('Todo bien');
          alert("Negocio" + name + "creado correctamente")
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

  return (
      <form>
      <div className='Account'>
        <label className='labelcolorAcount'>
        <img src="/assets/img/manos.png" width="25" height="25" />
          <input className='inputcolorAcount' id='nombre' placeholder="‎ Nombre del Negocio"type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label className='labelcolorAcount'>
        <img src="/assets/img/ubicacion.png" width="25" height="25" />
          <input className='inputcolorAcount' id='ubicacion' placeholder="‎ Ubicación" type="text" name="location" onChange={handleChange} />
        </label>
        <br />
        <label className='labelcolorAcount'>
        <img src="/assets/img/usuario1.png" width="25" height="25" />
          <input className='inputcolorAcount' id='dueño' placeholder="‎ Nombre Del Dueño" type="text" name="dueño" onChange={handleChange} />
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
