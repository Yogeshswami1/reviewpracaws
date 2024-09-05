// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ReviewTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #333;
`;

const ReviewText = styled.p`
  margin: 0.25rem 0;
  color: #555;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #ff4c4c;
  font-size: 1.2rem;

  &:hover {
    color: #ff1a1a;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Dropdown = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4c4c;
  }
`;

const Dashboard = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filterRating, setFilterRating] = useState('');
  const [filterTLName, setFilterTLName] = useState('');

  const tlNames = [
    'TL-09 - Abhinandan',
    'TL-10 - Rishabh',
    'TL-11 - Durgesh',
    'TL-12 - Pooja',
    'TL-14 - Simran',
    
  ];

  useEffect(() => {
    axios.get('http://localhost:8000/api/reviews')
      .then(response => {
        setReviews(response.data);
        setFilteredReviews(response.data);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/reviews/${id}`)
      .then(response => {
        setFilteredReviews(filteredReviews.filter(review => review._id !== id));
        setReviews(reviews.filter(review => review._id !== id));
      })
      .catch(error => console.error('Error deleting review:', error));
  };

  const handleFilter = () => {
    let filtered = reviews;

    if (filterRating) {
      filtered = filtered.filter(review => review.rating === Number(filterRating));
    }

    if (filterTLName) {
      filtered = filtered.filter(review => review.tlName === filterTLName);
    }

    setFilteredReviews(filtered);
  };

  return (
    <DashboardContainer>
      <h2>Review Dashboard</h2>
      <FilterContainer>
        <Dropdown value={filterRating} onChange={(e) => setFilterRating(e.target.value)}>
          <option value="">Filter by Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </Dropdown>
        <Dropdown value={filterTLName} onChange={(e) => setFilterTLName(e.target.value)}>
          <option value="">Filter by Team Leader</option>
          {tlNames.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </Dropdown>
        <FilterButton onClick={handleFilter}>Apply Filters</FilterButton>
      </FilterContainer>
      <GridContainer>
        {filteredReviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewTitle>{review.name}</ReviewTitle>
            <ReviewText><strong>Email:</strong> {review.email}</ReviewText>
            <ReviewText><strong>Phone:</strong> {review.phoneNumber}</ReviewText>
            <ReviewText><strong>Rating:</strong> {review.rating}</ReviewText>
            <ReviewText><strong>Description:</strong> {review.description}</ReviewText>
            <ReviewText><strong>TLName:</strong> {review.tlName}</ReviewText>
            <DeleteButton onClick={() => handleDelete(review._id)}>
              <FaTrash />
            </DeleteButton>
          </ReviewCard>
        ))}
      </GridContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
