import React, { useState } from 'react';
import "../public/globals.css";

const BussinesAccount = () => {
  const [business, setBusiness] = useState({
    name: '',
    location: '',
    productOrService: '',
    owner: '',
    img:'',
  });
  const [base64Image, setBase64Image] = useState('');

  const convertiraBase64=(archivos, e)=> {
    Array.from(archivos).forEach(archivo=>{
      var reader=new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload=function(){
        var arrayAuxiliar = [];
        var base64 = reader.result;
        arrayAuxiliar=base64.split(',');
        setBase64Image(arrayAuxiliar[1]);
      }
    })
    const handleChange = (e) => {
      setBusiness({
        ...business,
        [e.target.name]: e.target.value,
      });
    };
  }

  const handleChange = (e) => {
    setBusiness({
      ...business,
      [e.target.name]: e.target.value,
    });
  };

  console.log(base64Image);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.querySelector("#nombre").value;
    const location = e.target.querySelector("#ubicacion").value;
    const owner = e.target.querySelector("#owner").value;
    const productOrService = e.target.querySelector("#producto").value;
    // let formData = new FormData(e.target);
    // formData.append("imagen", base64Image);

    // for (const value of formData.values()) {
    //   console.log(value);
    // }

    console.log()
      fetch('http://localhost:3001/business', {
        method: 'POST',
        headers: {
          //'Content-Type': 'application/x-www-form-urlencoded',
          // "Content-Type": "multipart/form-data",
          'Content-Type': 'application/json',
        },
        body: 
        name,
        location,
        owner,
        productOrService,
        base64Image,
      })  
      .then((response) => {
        if (response.ok) {
          console.log('Todo bien');
          alert("Negocio " + business.name + " creado correctamente")
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
          <input className='inputcolorAcount' id='owner' placeholder="‎ Nombre Del Dueño" type="text" name="owner" onChange={handleChange} />
        </label>
        <br />
        <label>
          <textarea className='labelcolorAcountProduct' id='producto' placeholder="Describe tu negocio..." type="text" name="productOrService"   onChange={handleChange} />
        </label>
        <br/>
        <label className='labelcolorAcount'>
          <input className='inputcolorAcount' id='imagen' type="file" onChange={(e)=>convertiraBase64(e.target.files)} /* onChange={(e)=>convertiraBase64(e.target.files)} *//>
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
