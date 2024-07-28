import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './Nav_bar'
import HeadingWithButton from './Heading_with_button'
import Card from './Card'
import Slider from './Sliders'
import Footer from './Footer'

function App() {
  return (
    <div className="container">
      <Navbar />
      <h1>Hi there!!!</h1>
      <HeadingWithButton title="Our Cards-1" buttonText="See More" />
      <div className="cards-container">
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 1" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 2" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 3" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 4" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 5" />
      </div>
      <Slider />
      <HeadingWithButton title="Our Cards-2" buttonText="See More" />
      <div className="cards-container">
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 1" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 2" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 3" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 4" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 5" />
      </div>
      <HeadingWithButton title="Our Cards-3" buttonText="See More" />
      <div className="cards-container">
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 1" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 2" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 3" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 4" />
        <Card imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ5rAqr1pIi6pHOdFGGijRXcE4HLHqWJNSw&s" title="Card 5" />
      </div>
      <Footer />
    </div>
  );
}

export default App
