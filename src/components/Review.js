import React, { useState } from 'react';
import people from '../data';
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const randomIndex = () => {
    const newIndex = Math.ceil(Math.random() * 4)-1;

    if (index === newIndex) {
      randomIndex();
    } else {
      setIndex(newIndex);
    }
  };
  const previousIndex = () => {
    if (index - 1 === -1) {
      setIndex(3);
    }
    else{
      setIndex(index-1)
    }
  };
  const nextIndex = () => {
    if (index + 1 === 4) {
      setIndex(0);
    }
    else{
      setIndex(index+1)
    }
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img alt={name} src={image} className='person-img' />
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={previousIndex}>
          previous
        </button>
        <button className='next-btn' onClick={nextIndex}>
          next
        </button>
      </div>
      <button className='random-btn' onClick={randomIndex}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
