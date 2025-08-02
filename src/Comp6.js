import "./Comp.css" 
import React from "react"
import image1 from "./photos/bananabread.jpeg"
import image2 from "./photos/chococookie.jpeg"
import image3 from "./photos/tart.jpeg"

function  Comp6() {
    return (
        <div className="comp">
            <h4>Baked</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Banana Bread</h2>
                    <p>This fluffy bread is made with mashed ripe bananas and mix with melted coconut oil, maple syrup, almonf milk, and vanilla extract</p>
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
                    <h2>Chocolate Chip Cookies</h2>
                    <p>In a mixing bowl, cream together softened vegan butter or coconut oil with brown sugar and granulated sugar until light and fluffy.</p>
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
                    <h2>Fruit Tart</h2>
                    <p>This vegan fruit tart is not only beautiful but also delicious and perfect for any occasion. Feel free to get creative with the fruit toppings and use whatever is in season or your favorites!</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp6