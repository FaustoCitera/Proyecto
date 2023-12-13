import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const App = ({handleReturnToSearch, businesses}) => {
  const [business, setBusiness] = useState({});
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ reviewer: '', comment: '' });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [showSearchBar, setShowSearchBar] = useState(false); // Nuevo estado para controlar la visibilidad de SearchBar

  const businessId = businesses;
  const handleSubmit = async (e) => {
  e.preventDefault();
    console.log(e.target)
    const username = e.target.querySelector("#").value;
    const password = e.target.querySelector("#").value;
    fetch('http://localhost:3001/negocio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ( {
      username,
      password,
      }),
    })
    .then((response) => {
      if (response.ok) {
        console.log('Todo bien');
        alert("Usuario " + username + " actualizado correctamente")
        router.push('/home'); 
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      }
    })
    .catch((error) => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    })
  }
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
          <h1>{business.name}</h1>
          {/* Aquí va el logo blancoS */}
        </div>
        <div className='elwith'>
          <img className="imglocal" src={business.image} alt="Business" style={{ width: '400px', height: '200px' }} />
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
                color: hoveredRating >= star || rating >= star ? 'orange' : 'gray',
              }}
            >
              ☆
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
            {reviews.map((review) => (
              <div key={review._id}>
                <div><p className="">{review.reviewer}</p>: <p className="">{review.comment}</p></div>
                <button onClick={() => handleLikeDislike(review._id, 'like')}>Like</button>
                <button onClick={() => handleLikeDislike(review._id, 'dislike')}>Dislike</button>
                <textarea
                  placeholder="Responder..."
                  value={review.reply || ''}
                  onChange={(e) => handleReplySubmit(review._id, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        <div class="paddingbuttonconfig2">
          <Link className='VOLVERCONFIG' href="#" onClick={handleReturnToSearch}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
