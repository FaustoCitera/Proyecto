import React, { useState } from 'react';

const Comment = ({ comment, onLike, onDislike, onReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReply = () => {
    onReply(comment, replyText);
    setReplyText('');
  };

  return (
    <li>
      <strong>{comment.name}:</strong> {comment.comment}
      <br />
      <button onClick={() => onLike(comment)}>Like ({comment.likes})</button>
      <button onClick={() => onDislike(comment)}>Dislike ({comment.dislikes})</button>
      <br />
      <textarea
        placeholder="Responder al comentario..."
        value={replyText}
        onChange={handleReplyChange}
      ></textarea>
      <button onClick={handleReply}>Responder</button>
      {comment.replies && comment.replies.length > 0 && (
        <ul>
          {comment.replies.map((reply, index) => (
            <Comment key={index} comment={reply} onLike={onLike} onDislike={onDislike} onReply={onReply} />
          ))}
        </ul>
      )}
    </li>
  );
};

const ReviewList = ({ comments, onLike, onDislike, onReply }) => {
  return (
    <div>
      <h2>Comentarios</h2>
      {comments.length === 0 ? (
        <p>No hay comentarios aún.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} onLike={onLike} onDislike={onDislike} onReply={onReply} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
