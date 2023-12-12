import React, { useState } from 'react';
import "../public/globals.css";
import Reviewer from "./Reviewer";

const BussinesAccount = () => {
  //const [img, setImg] = useState('');
  const [business, setBusiness] = useState({
    name: '',
    location: '',
    productOrService: '',
    owner: '',
    img:'',
  });

  const handleChange = (e) => {
    setBusiness({
      ...business,
      [e.target.name]: e.target.value,
    });
    // setImg({
    //   ...img,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const name = e.target.querySelector("#nombre").value;
    // const location = e.target.querySelector("#ubicacion").value;
    // const owner = e.target.querySelector("#dueño").value;
    // const productOrService = e.target.querySelector("#producto").value;
    // const img = e.target.querySelector("#imagen").value;
    let formData = new FormData(e.target);
    formData.append("imagen", business.img);

    for (const value of formData.values()) {
      console.log(value);
    }
  
    
    // formData.append(name);
    // formData.append(location);
    // formData.append(owner);
    // formData.append(productOrService);
    // formData.append(img);
    console.log()
      fetch('http://localhost:3001/business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // "Content-Type": "multipart/form-data",
        },
        body: formData,
      })  
      .then((response) => {
        if (response.ok) {
          console.log('Todo bien');
          alert("Negocio" + business.name + "creado correctamente")
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
      <form onSubmit={handleSubmit}>
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
        <label>
          <textarea className='labelcolorAcountProduct' id='producto' placeholder="Describe tu negocio..." type="text" name="productOrService"   onChange={handleChange} />
        </label>
        <br/>
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' id='imagen' type="file" onChange={handleChange} />
        </label>
        <br />
        <div className='labelcolorbuton'>
        <button className='inputcolorbuton' type="submit" >
          Crear Negocio
        </button>
        </div>
        </div>
    
      </form>

  );
};

export default BussinesAccount;
