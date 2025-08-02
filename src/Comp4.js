import React from "react"
import "./Comp.css"
import image1 from "./photos/pizza.jpeg"
import image2 from "./photos/nachos.jpeg"
import image3 from "./photos/mac.jpeg"

function  Comp4() {
    return (
        <div className="comp">
            <h4>Craving</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Pizza</h2>
                    <p>Whether you prefer classic pepperoni, loaded with veggies, or topped with gourmet ingredients like prosciutto and arugula, pizza is a go-to comfort food that satisfies cravings for something savory, cheesy, and satisfyingly carb-heavy.</p>
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
                    <h2>Loaded Nachos</h2>
                    <p>It's a flavorful and satisfying dish that combines crunchy, creamy, spicy, and tangy elements with melted cheese, savory beans, spicy jalapenos, creamy guacamole.</p>
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
                    <h2>Mac and Cheese</h2>
                    <p>This indulgent dish combines savory flavors with creamy textures, making it perfect for satisfying comfort food cravings.</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp4