import "./Comp.css" 
import React from "react"
import image1 from "./photos/Beef-Stir-Fry-.jpeg"
import image2 from "./photos/tikkamasala.jpeg"
import image3 from "./photos/eggcurry.jpeg"

function  Comp8() {
    return (
        <div className="comp">
            <h4> High Protien</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Lean Beef Stir-Fry with Brown Rice</h2>
                    <p>Serve the stir-fry over cooked brown rice, which is high in fiber and complex carbohydrates, for a hearty and filling meal.</p>
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
                    <h2>Chicken Tikka Masala</h2>
                    <p>Marinate chicken pieces in a mixture of yogurt, lemon juice, ginger-garlic paste, and spices such as garam masala, cumin, coriander, turmeric, and chili powder.</p>
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
                    <h2>Egg Curry</h2>
                    <p>This egg curry is flavorful, comforting, and perfect for a satisfying meal. Adjust the spices according to your taste preferences, and enjoy the rich flavors of this classic Indian dish!</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp8