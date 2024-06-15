// src/ReviewPage.js

import React from 'react';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f4f4f4;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Description = styled.div`
  padding: 1rem;
  font-size: 1rem;
  color: #333;
`;

const reviews = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/nltw-wmbtB0',
    description: 'The first customer review offers valuable insight into the user experience and overall satisfaction with our product. This feedback highlights how well our product meets customer needs, showcasing its benefits and performance. Understanding our customers perspectives helps us continue to improve and deliver exceptional quality. Reading these reviews provides potential buyers with firsthand information, aiding in their purchasing decisions and building trust in our brand.',
    
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/GpxTmi6IH9U',
    description: 'The second customer review delivers crucial insights into the satisfaction and experience users have with our product. This review emphasizes the product’s ability to fulfill customer expectations, demonstrating its key advantages and efficiency. By learning from our customers experiences, we can refine our offerings and maintain high standards. These reviews offer prospective buyers genuine opinions, assisting them in making informed choices and reinforcing their confidence in our brand.',
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/5luqoESejxY',
    description: 'The Third customer review offers valuable insight into the user experience and overall satisfaction with our product. This feedback highlights how well our product meets customer needs, showcasing its benefits and performance. Understanding our customers perspectives helps us continue to improve and deliver exceptional quality. Reading these reviews provides potential buyers with firsthand information, aiding in their purchasing decisions and building trust in our brand.',  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/embed/3ptqAMQrn0w',
    description: 'The fourth customer review offers critical insights into the user experience and overall satisfaction with our product. This feedback demonstrates how well our product meets customer expectations, highlighting its strengths and effectiveness. Gaining these perspectives from our customers enables us to consistently enhance our quality and service. Prospective buyers benefit from reading these reviews, gaining firsthand information that aids their purchasing decisions and fosters trust in our brand.',
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/embed/BXaJ7MxZ4pA',
    description: 'The fifth customer review provides valuable insight into the user experience and overall satisfaction with our product. This feedback illustrates how well our product meets customer needs, showcasing its benefits and performance. Understanding our customers perspectives helps us continue to improve and deliver exceptional quality. Reading these reviews gives potential buyers firsthand information, aiding in their purchasing decisions and building trust in our brand.',
  },
  {
    id: 6,
    videoUrl: 'https://www.youtube.com/embed/NcL9jxGORV0',
    description: 'The sixth customer review offers valuable insight into the user experience and overall satisfaction with our product. This feedback highlights how well our product meets customer needs, showcasing its benefits and performance. Understanding our customers perspectives helps us continue to improve and deliver exceptional quality. Reading these reviews provides potential buyers with firsthand information, aiding in their purchasing decisions and building trust in our brand.'







  },
];

// https://youtu.be/NcL9jxGORV0?si=lGbgnN67nedLVTGT

const ReviewPage = () => {
  return (
    <>
    <h1>Customer Reviews Feedback</h1>
    <ReviewContainer>
      <ReviewGrid>
        {reviews.map((review) => (
          <ReviewCard key={review.id}>
            <VideoWrapper>
              <iframe
                width="560"
                height="315"
                src={review.videoUrl}
                title={`Customer Review ${review.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
            <Description>{review.description}</Description>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </ReviewContainer>
    </>
  );
};

export default ReviewPage;
