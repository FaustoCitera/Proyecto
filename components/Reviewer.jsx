import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const App = () => {
  const [business, setBusiness] = useState({});
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ reviewer: '', comment: '' });
  const [hoveredRating, setHoveredRating] = useState(0);

  const businessId = 'your-business-id';

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const response = await fetch(`/api/business/${businessId}`);
        const data = await response.json();
        setBusiness(data);
        setRating(data.rating);
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching business data', error);
      }
    };

    fetchBusinessData();
  }, [businessId]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewSubmit = async () => {
    try {
      const response = fetch(`/api/business/${businessId}/reviews`, {
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
    <div className="ppage">
      <div className="fondoazul">
        <h1>{business.name}</h1>
        </div>
       <div>
       <img className="imglocal" src={business.image} alt="Business" style={{ width: '200px', height: '200px' }} />
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
        <div className='recubrebuton'>
        <button className='buttonreview' onClick={handleReviewSubmit}> Agregar comentario</button>
      </div>
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
};

export default App;
