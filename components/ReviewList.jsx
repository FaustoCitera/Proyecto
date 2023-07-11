import React from 'react';

const ReviewList = ({ comments }) => {
  return (
    <div>
      <h2>Comentarios</h2>
      {comments.length === 0 ? (
        <p>No hay comentarios aún.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
