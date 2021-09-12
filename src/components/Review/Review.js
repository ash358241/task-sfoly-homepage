import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, feedback, identity, img } = review;
  return (
    <div>
      <div class="card">
        <div class="layer"></div>
        <div class="content">
          <p>{feedback}</p>
          <div class="image">
            <img src={img} alt="" />
          </div>
          <div class="details">
            <h2>
              {name} <br /> <span>{identity}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
