import React from "react"
import "./Comp.css"
import image1 from "./photos/tiramisu.jpeg"
import image2 from "./photos/cheeseblue.jpeg"
import image3 from "./photos/mousseava.jpeg"

function  Comp2() {
    return (
        <div className="comp">
            <h4>Desserts</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Tiramisu</h2>
                    <p>This tiramisu recipe yields a rich and indulgent dessert with layers of creamy mascarpone cheese, coffee-soaked ladyfingers, and a hint of cocoa. It's perfect for special occasions or anytime you're craving a taste of Italy!</p>
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
                    <h2>Blueberry cheescake</h2>
                    <p>With its tantalizing blend of creamy richness and fruity brightness, our Blueberry Cheesecake is sure to transport your taste buds to dessert paradise with every forkful.</p>
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
                    <h5>May 2024 </h5>
                    <h2>Avacado mousse</h2>
                    <p> With each spoonful, you'll be transported to a lush tropical paradise where the air is thick with the fragrance of ripe avocados and the sun kisses your skin.</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp2