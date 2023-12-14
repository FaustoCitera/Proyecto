import React, { useState, useEffect} from 'react';
import Link from 'next/link';

const App = ({handleReturnToSearch, selectedBusinesses}) => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({comment: '' });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [negocio, setNegocio] = useState(selectedBusinesses);
    // setNegocio(selectedBusinesses)
    console.log(negocio)
  
  //negocio = businesses;
    // setNegocio(selectedBusinesses)
    // console.log(negocio)
  const handleSubmit = async () => {
    //  e.preventDefault();
    fetch('http://localhost:3001/negocio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ( {
      negocio,
      }),
    })
    .then((response) => {
      if (response.ok) {
        const data = response.json();
        setNegocio(data);
        console.log('Todo bien');
        alert("Negocio " + negocio + " recibido")
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      }
    })
    .catch((error) => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    })
  }

  console.log(negocio)
  
  useEffect (() => {
    handleSubmit()
  }, [])
  
  const handleReviews = async () => {
    try {
      const response = await fetch('http://localhost:3001/reviews', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      }
    } catch (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    }
  }

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  
  const handleReviewSubmit = async (e) => {
    try {
      e.preventDefault();
      const estrellas = e.target.querySelector("#estrellas").value;
      console.log(estrellas)
      const resena = e.target.querySelector("#resena").value;
      console.log(resena)
      // const nombreNegocio = e.target.querySelector("#nombreNegocio").value;
      const response = fetch('http://localhost:3001/Review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          negocio,
          estrellas,
          comment: resena,
        }),
      });
      const data = await response.json();
      setReviews(data.reviews);
      setNewReview({comment: '' });
      setRating(0); // Restablecer el rating después de enviar la reseña
      alert("reseña enviada")
    } catch (error) {
      console.error('Error submitting review', error);
    }
  };

  return (
    <form onSubmit={() => {
      // handleSubmit(); 
      // handleReviewSubmit();
    }}> 
    <div className="randomxd">
      <div>
        <div className="">
          <h1 className="Nombredelnegocioo"> {negocio.nombreNegocio}</h1>
          <h2 className="Nombredelnegocioo"> {negocio.ubicacion}</h2>
          {/* Aquí va el logo blancoS */}
        </div>
        <div className='elwith'>
          <img className="imglocal" src={negocio.imagen} alt="Business" style={{ width: '400px', height: '200px' }} />
          <p className='estrellitas'>Calificación: {rating} </p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              className='strellacolor'
              name="estrellas"
              key={star}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              onClick={() => handleRatingChange(star)}
              style={{
                cursor: 'pointer',
                color: hoveredRating >= star || rating >= star ? 'blue' : 'gray',
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div className='eldivloco'>
          <div className="dejacomentario">
            <div className='spaceinbetween'>
              <input
                className='inputNoMbre'
                type="text"
                placeholder=" Nombre:"
                name="nombreNegocio"
                value={newReview.reviewer}
                onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
              />
            </div>
            <div className='spaceinbetween'>
              <textarea
                className='textareat'
                name="resena"
                placeholder=" Escribe un comentario..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
            </div>
            <div className='flexxd'>
              <div className='recubrebuton'>
                <button className='buttonreview' onChange={handleReviewSubmit}> Agregar comentario</button>
              </div>
            </div>
          </div>
          <div className='Generalcomentarios'>
           {/* <label className="Nombredelnegocioo"> Comentarios: </label>
            <div className='cardtodolike'>
           <div className="UsuarioyComentario"><p className="UsuarioyComentario2">PepeLover26</p>: <p className="unsuarioycomentario2">‎ Excelentes baños, esta vez no estaban desordenados. Me gusto mucho como me atendio el moso luis.</p></div>
            <div>
              <div className="losdosbtn">
            <button className="btnuno">Like</button>
            <button className="btndons">Dislike</button>
            </div>
            </div>
            </div>
          </div> */}
          {reviews.map((review) => (
            <div key={review._id}>
              <label className="Nombredelnegocioo"> Comentarios: </label>
              <div className='cardtodolike'>
              <div className="UsuarioyComentario"><p className="UsuarioyComentario2">{review.reviewer}</p>: <p className="unsuarioycomentario2">{review.comment}</p></div>
              <div className="losdosbtn">
              <button className="btnuno" onClick={() => handleLikeDislike(review._id, 'like')}>Like</button>
              <button className="btndons" onClick={() => handleLikeDislike(review._id, 'dislike')}>Dislike</button>
              </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div class="paddingbuttonconfig2">
        <Link className='VOLVERCONFIG' href="#" onClick={handleReturnToSearch}>
          Volver
        </Link>
      </div>
    </div>
    </form>
  );
};

export default App;
