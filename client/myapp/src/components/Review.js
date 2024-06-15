// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import ReactStars from 'react-rating-stars-component';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const ReviewContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f0f2f5;
// `;

// const ReviewForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   max-width: 500px;
//   width: 100%;
//   padding: 2rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   background-color: #fff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const ReviewTitle = styled.h2`
//   margin-bottom: 1rem;
//   text-align: center;
//   color: #333;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const RatingLabel = styled.label`
//   font-size: 1rem;
//   color: #333;
// `;

// const ReviewInput = styled.input`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
//   width: 100%;
// `;

// const ReviewTextArea = styled.textarea`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
//   resize: vertical;
//   width: 100%;
// `;

// const ReviewButton = styled.button`
//   padding: 0.75rem;
//   border: none;
//   border-radius: 4px;
//   background-color: #333;
//   color: #fff;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ff4c4c;
//   }
// `;

// const Review = () => {
//   const [rating, setRating] = useState(0);
//   const [description, setDescription] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [starsKey, setStarsKey] = useState(Date.now());
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       toast.error('Invalid email address', {
//         position: 'top-center',
//       });
//       return;
//     }

//     // Validate phone number format (10 digits)
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       toast.error('Phone number must be 10 digits', {
//         position: 'top-center',
//       });
//       return;
//     }

//     axios.post('http://localhost:8000/api/reviews', { name, email, phoneNumber, rating, description })
//       .then(response => {
//         toast.success('Your review has been submitted!', {
//           position: 'top-center',
//           autoClose: 3000,
//         });
//         setTimeout(() => {
//           navigate('/home');
//         }, 3000);
//         setName('');
//         setEmail('');
//         setPhoneNumber('');
//         setRating(0);
//         setDescription('');
//         setStarsKey(Date.now());
//       })
//       .catch(error => {
//         toast.error('There was an error submitting the review!', {
//           position: 'top-center',
//         });
//         console.error('There was an error submitting the review!', error);
//       });
//   };

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   return (
//     <ReviewContainer>
//       <ToastContainer />
//       <ReviewForm onSubmit={handleSubmit}>
//         <ReviewTitle>Submit Your Review</ReviewTitle>
//         <ReviewInput
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <ReviewInput
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <ReviewInput
//           type="tel"
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           required
//         />
//         <FormGroup>
//           <RatingLabel>Rating:</RatingLabel>
//           <ReactStars
//             key={starsKey}
//             count={5}
//             onChange={handleRatingChange}
//             size={40}
//             activeColor="#ffd700"
//             value={rating}
//           />
//         </FormGroup>
//         <ReviewTextArea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           rows="5"
//           required
//         />
//         <ReviewButton type="submit">Submit Review</ReviewButton>
//       </ReviewForm>
//     </ReviewContainer>
//   );
// };

// export default Review;


// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import ReactStars from 'react-rating-stars-component';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';

// const ReviewContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f0f2f5;
// `;

// const ReviewForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   max-width: 500px;
//   width: 100%;
//   padding: 2rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   background-color: #fff;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const ReviewTitle = styled.h2`
//   margin-bottom: 1rem;
//   text-align: center;
//   color: #333;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const RatingLabel = styled.label`
//   font-size: 1rem;
//   color: #333;
// `;

// const ReviewInput = styled.input`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
//   width: 100%;
// `;

// const ReviewTextArea = styled.textarea`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
//   resize: vertical;
//   width: 100%;
// `;

// const ReviewButton = styled.button`
//   padding: 0.75rem;
//   border: none;
//   border-radius: 4px;
//   background-color: #333;
//   color: #fff;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ff4c4c;
//   }
// `;

// const Dropdown = styled.select`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 1rem;
//   width: 100%;
// `;

// const Review = () => {
//   const [rating, setRating] = useState(0);
//   const [description, setDescription] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [tlName, setTLName] = useState(''); // State for TL Name
//   const [starsKey, setStarsKey] = useState(Date.now());
//   const navigate = useNavigate();

//   const tlNames = [
//     'John Doe',
//     'Jane Doe',
//     'Alice Smith',
//     'Bob Johnson',
//     'Emily Brown',
//     'Michael Wilson',
//     'Sarah Davis',
//     'David Garcia',
//     'Olivia Miller',
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       toast.error('Invalid email address', {
//         position: 'top-center',
//       });
//       return;
//     }

//     // Validate phone number format (10 digits)
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       toast.error('Phone number must be 10 digits', {
//         position: 'top-center',
//       });
//       return;
//     }

//     axios
//       .post('http://localhost:8000/api/reviews', {
//         name,
//         email,
//         phoneNumber,
//         tlName, // Include TL Name in the object sent to server
//         rating,
//         description,
//       })
//       .then((response) => {
//         toast.success('Your review has been submitted!', {
//           position: 'top-center',
//           autoClose: 3000,
//         });
//         setTimeout(() => {
//           navigate('/home');
//         }, 3000);
//         setName('');
//         setEmail('');
//         setPhoneNumber('');
//         setRating(0);
//         setDescription('');
//         setStarsKey(Date.now());
//         setTLName(''); // Reset TL Name after submission
//       })
//       .catch((error) => {
//         toast.error('There was an error submitting the review!', {
//           position: 'top-center',
//         });
//         console.error('There was an error submitting the review!', error);
//       });
//   };

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   return (
//     <ReviewContainer>
//       <ToastContainer />
//       <ReviewForm onSubmit={handleSubmit}>
//         <ReviewTitle>Submit Your Review</ReviewTitle>
//         <ReviewInput
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <ReviewInput
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <ReviewInput
//           type="tel"
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           required
//         />
//         <FormGroup>
//           <RatingLabel>Rating:</RatingLabel>
//           <ReactStars
//             key={starsKey}
//             count={5}
//             onChange={handleRatingChange}
//             size={40}
//             activeColor="#ffd700"
//             value={rating}
//           />
//         </FormGroup>
//         <Dropdown
//           value={tlName}
//           onChange={(e) => setTLName(e.target.value)}
//           required
//         >
//           <option value="">Select Team Leader</option>
//           {tlNames.map((name) => (
//             <option key={name} value={name}>
//               {name}
//             </option>
//           ))}
//         </Dropdown>
//         <ReviewTextArea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           rows="5"
//           required
//         />
//         <ReviewButton type="submit">Submit Review</ReviewButton>
//       </ReviewForm>
//     </ReviewContainer>
//   );
// };

// export default Review;




import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const ReviewForm = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 800px; /* Increased max-width for better spacing */
  width: 100%;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewTitle = styled.h2`
  text-align: center;
  color: #333;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const RatingLabel = styled.label`
  font-size: 1rem;
  color: #333;
  min-width: 100px; /* Adjusted min-width for label alignment */
`;

const ReviewInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

const ReviewTextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  width: 100%;
`;

const ReviewButton = styled.button`
  padding: 0.75rem;
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

const Dropdown = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

const Review = () => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tlName, setTLName] = useState('');
  const [starsKey, setStarsKey] = useState(Date.now());
  const navigate = useNavigate();

  const tlNames = [
    'TL-09 - Abhinandan',
    'TL-10 - Rishabh',
    'TL-11 - Durgesh',
    'TL-12 - Pooja',
    'TL-14 - Simran',
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address', {
        position: 'top-center',
      });
      return;
    }

    // Validate phone number format (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast.error('Phone number must be 10 digits', {
        position: 'top-center',
      });
      return;
    }

    axios
      .post('http://localhost:8000/api/reviews', {
        name,
        email,
        phoneNumber,
        tlName,
        rating,
        description,
      })
      .then((response) => {
        toast.success('Your review has been submitted!', {
          position: 'top-center',
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate('/home');
        }, 3000);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setRating(0);
        setDescription('');
        setStarsKey(Date.now());
        setTLName('');
      })
      .catch((error) => {
        toast.error('There was an error submitting the review!', {
          position: 'top-center',
        });
        console.error('There was an error submitting the review!', error);
      });
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <ReviewContainer>
      <ToastContainer />
      <ReviewForm onSubmit={handleSubmit}>
        <ReviewTitle>Submit Your Review</ReviewTitle>
        <FormGroup>
          <RatingLabel>Rating:</RatingLabel>
          <ReactStars
            key={starsKey}
            count={5}
            onChange={handleRatingChange}
            size={40}
            activeColor="#ffd700"
            value={rating}
          />
        </FormGroup>
        <FormGroup>
          <ReviewInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <ReviewInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <ReviewInput
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </FormGroup>
        <Dropdown value={tlName} onChange={(e) => setTLName(e.target.value)} required>
          <option value="">Select Team Leader</option>
          {tlNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Dropdown>
        <ReviewTextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          required
        />
        <ReviewButton type="submit">Submit Review</ReviewButton>
      </ReviewForm>
    </ReviewContainer>
  );
};

export default Review;
