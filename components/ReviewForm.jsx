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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() !== '' && comment.trim() !== '') {
      const newComment = {
        name,
        comment
      };

      // Llama a la función onAddComment para pasar el nuevo comentario al componente principal
      onAddComment(newComment);

      // Restablece los campos del formulario
      setName('');
      setComment('');
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
