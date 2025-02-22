import React from 'react';
import Card from './Card';  // Import the Card component
import './Manu.css';

const Manu = ({ foodItems }) => {
  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Our Menu</h1>
        <p>Delicious dishes prepared with the finest ingredients. Order now!</p>
      </header>

      <section className="menu-cards-container">
        {foodItems.map(item => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
          />
        ))}
      </section>
    </div>
  );
};

export default Manu;
