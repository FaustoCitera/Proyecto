import React, { useState, useEffect } from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import Link from 'next/link';

const HomePage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Recupera los comentarios almacenados en localStorage al cargar la página
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    // Almacena los comentarios en localStorage cada vez que se actualizan
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h1>Reseñas de negocios</h1>
      <ReviewForm onAddComment={handleAddComment} />
      <ReviewList comments={comments} />
      <Link href="/home">
        Volver
      </Link>
    </div>
  );
};

export default HomePage;
