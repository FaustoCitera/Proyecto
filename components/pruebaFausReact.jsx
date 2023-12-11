//esto despues lo borro es para probar alguito

import { useState } from 'react';
import Link from 'next/link';

const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.querySelector("#username").value;
    const password = e.target.querySelector("#password").value;
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify ( {
      username,
      password,
      }),
    });
    router.push('/home');
  } 

  return (
    <div>
      <div>
        <h1>{business.name}</h1>
        <img src={business.image} alt="Business" style={{ width: '200px', height: '200px' }} />
      </div>
      <div>
        <p>Calificación: {rating} estrellas</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => handleRatingChange(star)}
            style={{
              cursor: 'pointer',
              color: hoveredRating >= star || rating >= star ? 'orange' : 'gray',
            }}
          >
            ⭐
          </span>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Tu nombre"
          value={newReview.reviewer}
          onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
        />
        <textarea
          placeholder="Escribe tu reseña"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        />
        <button onClick={handleReviewSubmit}>Enviar reseña</button>
      </div>
      <div>
        {reviews.map((review) => (
          <div key={review._id}>
            <p>{review.reviewer} dijo: {review.comment}</p>
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
      <Link  href="/home">
          Volver al buscador
        </Link>
    </div>
  );