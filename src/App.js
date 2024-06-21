// src/App.js
import React from 'react';
import Card from './Card.js';
import './App.css';

const App = () => {
    const cardData = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      image: '/images/i1.jpg'
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      image: '/images/i2.jpg'
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      image: '/images/i3.jpg'
    },
    {
      title: 'Card 4',
      description: 'This is the third card.',
      image: '/images/i4.jpg'
    },
    {
      title: 'Card 5',
      description: 'This is the third card.',
      image: '/images/i5.jpeg'
    },
    {
      title: 'Card 6',
      description: 'This is the third card.',
      image: '/images/i6.png'
    }
  ];

  return (
    <div className="app">
      {cardData.map((data, index) => (
        <Card key={index} title={data.title} description={data.description} image={data.image} />
      ))}
    </div>
  );
};

export default App;
