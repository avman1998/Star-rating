import { useState } from "react";
const StarRating = () => {
  const [stars, setStars] = useState(new Array(5).fill("☆"));
  const handleRating = (id) => {
    const newStars = stars?.map((item, index) => {
      if (index <= id) {
        return "★";
      } else return "☆";
    });
    setStars(newStars);
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {stars?.map((item, index) => {
        return (
          <p
            onMouseEnter={() => handleRating(index)}
            onMouseLeave={() => setStars(new Array(5).fill("☆"))}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default StarRating;
