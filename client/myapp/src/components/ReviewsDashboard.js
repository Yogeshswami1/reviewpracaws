import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const ReviewCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewTitle = styled.h2`
  color: #333;
`;

const ReviewText = styled.p`
  color: #555;
`;

const ReviewsDashboard = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    axios.get('http://localhost:8000/api/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  };

  const handleDeleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/reviews/${id}`);
      fetchReviews(); // Refresh reviews after deletion
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <DashboardContainer>
      <ReviewTitle>All Reviews</ReviewTitle>
      {reviews.slice().reverse().map((review) => (
        <ReviewCard key={review._id}>
          <h3>{review.name}</h3>
          <p>Email: {review.email}</p>
          <p>Phone: {review.phoneNumber}</p>
          <p>Rating: {review.rating}</p>
          <ReviewText>{review.description}</ReviewText>
          <button onClick={() => handleDeleteReview(review._id)}>Delete</button>
        </ReviewCard>
      ))}
    </DashboardContainer>
  );
};

export default ReviewsDashboard;
