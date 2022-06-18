import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNum = (num) => {
    if(num > people.length-1) {
      return 0;
    }

    if(num < 0) {
      return people.length-1;
    }

    return num;
  }

  const nextPerson = () => {
    setIndex((index)=> {
      let newIndex = index+1;
      return checkNum(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((index)=> {
      let newIndex = index-1;
      return checkNum(newIndex);
    })
  }

  const randomPerson = () => {
    let randNum = Math.floor(Math.random() * people.length);

    if(randNum === index) {
      randNum = index+1;
    }
    setIndex(checkNum(randNum));
  }

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
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button class="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button class="random-btn" onClick={randomPerson}>surprise me!</button>
    </article>
  );
};

export default Review;
