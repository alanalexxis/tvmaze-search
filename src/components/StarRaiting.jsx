import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mt-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className={`text-1xl ${
            index < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
