import "./Comp.css" 
import React from "react"
import image1 from "./photos/Risotto.jpeg"
import image2 from "./photos/sushi.jpeg"
import image3 from "./photos/thai curry.jpeg"

function  Comp7() {
    return (
        <div className="comp">
            <h4>Vegan</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Mushroom risotto</h2>
                    <p>Creamy and comforting, this vegan risotto is made with Arborio rice cooked with vegetable broth, white wine, and sautéed mushrooms, onions, and garlic. </p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
             <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image2} alt="2"></img>
                </div>
                <div class="card-content">
                    <h5>April 2024</h5>
                    <h2>Sushi Rolls </h2>
                    <p>Fill nori seaweed sheets with sushi rice, thinly sliced vegetables such as cucumber, avocado, and bell peppers, and add-ins like tofu, pickled radish, or tempura sweet potato. </p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
             <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image3} alt="3"></img>
                </div>
                <div class="card-content">
                    <h5>May 2024</h5>
                    <h2>Thai Green Curry</h2>
                    <p>Simmer tofu, mixed vegetables (such as bell peppers, broccoli, and carrots), and bamboo shoots in a fragrant green curry sauce made from coconut milk, green curry paste, lime leaves, and lemongrass.</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp7