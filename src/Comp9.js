import "./Comp.css" 
import React from "react"
import image1 from "./photos/lentilsoup.jpeg"
import image2 from "./photos/tomsoup.jpeg"
import image3 from "./photos/mushsoup.jpeg"

function  Comp9() {
    return (
        <div className="comp">
            <h4>Soups</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Coconut Curry Lentil Soup</h2>
                    <p>In a large pot, sauté diced onions, garlic, and ginger until softened. Add curry powder, cumin, and turmeric, then stir in red lentils, diced tomatoes, vegetable broth, and coconut milk.</p>
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
                    <h2>Tomato Basil Soup</h2>
                    <p>In a large pot, sauté diced onions and minced garlic until softened. Add canned diced tomatoes (with juices), vegetable broth, and a handful of fresh basil leaves. Simmer for about 15-20 minutes to allow the flavors to meld together. </p>
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
                    <h2>Creamy Mushroom Soup</h2>
                    <p>In a large pot, sauté sliced mushrooms with diced onions and minced garlic until the mushrooms release their moisture and brown slightly. Stir in vegetable broth, chopped thyme, and a splash of soy sauce or tamari. </p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp9