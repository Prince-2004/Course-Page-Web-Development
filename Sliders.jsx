import React from 'react'
import { useState } from 'react'
import './App.css'

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s",
        text: "Slide 1 Description"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s",
        text: "Slide 2 Description"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s",
        text: "Slide 3 Description"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s",
        text: "Slide 4 Description"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s",
        text: "Slide 5 Description"
      }
    ];

    const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    return (
      <div className="slider-container">
        <button className="slider-button prev-button" onClick={handlePrevSlide}>❮</button>
        <div className="slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-text">
                <h2>{`Slide ${index + 1}`}</h2>
                <p>{slide.text}</p>
              </div>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
            </div>
          ))}
        </div>
        <button className="slider-button next-button" onClick={handleNextSlide}>❯</button>
      </div>
    );
}

export default Slider