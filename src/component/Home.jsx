import React, { useState } from "react";
import Card from "./Card";
import './Home.css';

const Home = () => {
    const foodItems = [
        { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvG9dRvJfR6l8T54Lv4vbU_ZbkmaWfh56h0w&s", title: "Pizza Margherita", description: "Delicious classic pizza with fresh tomatoes, mozzarella, and basil.", buttonText: "Order Now" },
        { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpZB0_3qGRT0vx7Jlw662goIgQc9en4esg&s", title: "Pasta Carbonara", description: "Creamy pasta with eggs, cheese, pancetta, and pepper.", buttonText: "Order Now" },
        { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0Lq7SNpDewVfPOkphUYm1cN-l2csUz8izg&s", title: "Burger & Fries", description: "Juicy beef patty with crispy fries on the side.", buttonText: "Order Now" },
        { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4li12Itafdh6yJBSeuSevrE5xW-a_KBkyeA&s", title: "Sushi Rolls", description: "Fresh sushi rolls with tuna, avocado, and cucumber.", buttonText: "Order Now" },
        { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg0Knv9Lfrw5FRs4WvcIgXvXOQoz3R9MnVQ&s", title: "Tacos", description: "Soft tacos with grilled chicken, avocado, and salsa.", buttonText: "Order Now" },
        { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxlxQpfPKZa1H9WTnCaSVHV025z0XpXBegA&s", title: "Caesar Salad", description: "Crisp Romaine lettuce with Caesar dressing and croutons.", buttonText: "Order Now" },
        { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qmDuvRhW5VyW__3SVDjnRiAJ4xgrGKDlcw&s", title: "Chicken Wings", description: "Spicy buffalo chicken wings served with ranch dipping sauce.", buttonText: "Order Now" },
        { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTz5c5oS4a2-QmYwqyEsYYe5vb2dbBXIDow&s", title: "Grilled Salmon", description: "Fresh grilled salmon fillet served with a lemon glaze.", buttonText: "Order Now" }
    ];

    // State to manage signup form visibility
    const [showSignup, setShowSignup] = useState(false);
    // State to manage the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Handle the signup button click
    const handleSignupClick = () => {
        setShowSignup(!showSignup);
    };

    // Handle the search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter food items based on search query
    const filteredFoodItems = foodItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="overlay"></div>
                <div className="home-content">
                    <h1>Welcome to FoodieFly</h1>
                    <p>Get your favorite food delivered fast and fresh!</p>
                    <button onClick={handleSignupClick} className="cta-button">Sign Up</button>
                    {showSignup && (
                        <div className="signup-form">
                            <h2>Sign Up</h2>
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    )}
                </div>
            </header>

            <section className="search-container">
                <input 
                    type="text" 
                    placeholder="Search for food..." 
                    value={searchQuery}
                    onChange={handleSearchChange} 
                />
            </section>

            <section className="card-container">
                {filteredFoodItems.length > 0 ? (
                    filteredFoodItems.map(item => (
                        <Card
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            buttonText={item.buttonText}
                        />
                    ))
                ) : (
                    <p>No food items found.</p>
                )}
            </section>

            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="feature">
                    <h3>Fast Delivery</h3>
                    <p>We ensure your food arrives quickly and in perfect condition.</p>
                </div>
                <div className="feature">
                    <h3>Wide Menu</h3>
                    <p>Choose from a variety of cuisines and dishes from local restaurants.</p>
                </div>
                <div className="feature">
                    <h3>Great Support</h3>
                    <p>Our customer support is here for you 24/7 to help with any issues.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
