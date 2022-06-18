import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <article className="review">
      <div class="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 class="author">{name}</h4>
      <p class="job">{job}</p>
      <p class="info">{text}</p>
      <div class="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button class="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button class="random-button">surprise me!</button>
    </article>
  );
};

export default Review;
