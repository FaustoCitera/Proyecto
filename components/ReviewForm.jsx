import React, { useState } from 'react';

const ReviewForm = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() !== '' && comment.trim() !== '') {
      const newComment = {
        name,
        comment,
        likes: 0,
        dislikes: 0,
        replies: [],
      };

      try {
        const response = fetch('http://localhost:3001/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newComment),
        });

        if (response.ok) {
          console.log('Reseña agregada con éxito');
          // Llama a la función onAddComment para pasar el nuevo comentario al componente principal
          onAddComment(newComment);

          // Restablece los campos del formulario
          setName('');
          setComment('');
        } else {
          console.error('Error al agregar la reseña');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comentario:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
      </div>
      <button type="submit">Agregar comentario</button>
    </form>
  );
};

export default ReviewForm;
