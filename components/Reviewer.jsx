import React, { useState, useEffect} from 'react';
import Link from 'next/link';

const App = ({handleReturnToSearch, businesses}) => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ reviewer: '', comment: '' });
  const [hoveredRating, setHoveredRating] = useState(0);

  console.log(businesses)
  const negocio = businesses;

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
  
  useEffect (() => {
    handleSubmit()
  }, [])
  
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = async () => {
    try {
      const response = fetch('http://localhost:3001/Review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reviewer: newReview.reviewer, comment: newReview.comment, rating }),
      });
      const data = await response.json();
      setReviews(data.reviews);
      setNewReview({ reviewer: '', comment: '' });
      setRating(0); // Restablecer el rating después de enviar la reseña
    } catch (error) {
      console.error('Error submitting review', error);
    }
  };

  return (
    <div className="randomxd">
      <div>
        <div className="">
          <h1> className="Nombredelnegocioo" {businesses.nombreNegocio}</h1>
          {/* Aquí va el logo blancoS */}
        </div>
        <div className='elwith'>
          <img className="imglocal" src={businesses.imagen} alt="Business" style={{ width: '400px', height: '200px' }} />
          <p className='estrellitas'>Calificación: {rating} estrellas</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              className='strellacolor'
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
                value={newReview.reviewer}
                onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
              />
            </div>
            <div className='spaceinbetween'>
              <textarea
                className='textareat'
                placeholder=" Escribe un comentario..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
            </div>
            <div className='flexxd'>
              <div className='recubrebuton'>
                <button className='buttonreview' onClick={handleReviewSubmit}> Agregar comentario</button>
              </div>
            </div>
          </div>
          <div className='Generalcomentarios'>
           {/* <div className="UsuarioyComentario"><p className="unsuarioycomentario2">pepe</p>: <p className="unsuarioycomentario2">‎ Excelentes baños, esta vez no estaban desordenados. Me gusto mucho como me atendio el moso luis.</p></div>
            <div>
              <div className="losdosbtn">
            <button className="btnuno">Like</button>
            <button className="btndons">Dislike</button>
            </div>
            <textarea
              placeholder="Responder..."
              value="que bienn"
            />
            </div>
          </div>*/}
          {reviews.map((review) => (
            <div key={review._id}>
              <div className="UsuarioyComentario"><p className="unsuarioycomentario2">{review.reviewer}</p>: <p className="unsuarioycomentario2">{review.comment}</p></div>
              <div className="losdosbtn">
              <button className="btnuno" onClick={() => handleLikeDislike(review._id, 'like')}>Like</button>
              <button className="btndons" onClick={() => handleLikeDislike(review._id, 'dislike')}>Dislike</button>
              </div>
              <textarea
                placeholder="Responder..."
                value={review.reply || ''}
                onChange={(e) => handleReplySubmit(review._id, e.target.value)}
              />
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
    
  );
};

export default App;
