import React, { useState } from 'react';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={index}
            className={`star ${starIndex <= rating ? 'active' : ''}`}
            onClick={() => setRating(starIndex)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};



export default StarRating;
