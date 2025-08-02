import React from "react"
import "./Comp.css"
import image1 from "./photos/cookiecream.jpeg"
import image2 from "./photos/coconutice.webp"
import image3 from "./photos/caramel.jpeg"

function  Comp1() {
    return (
        <div className="comp">
            <h4>Ice - Cream</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Cookies and Cream</h2>
                    <p>The crunchy cookie pieces add texture and flavor to the smooth ice cream, making it a timeless favorite for both kids and adults alike.</p>
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
                    <h2>Toasted Coconut</h2>
                    <p>Creamy coconut-flavored ice cream is infused with toasted coconut flakes, offering a delightful combination of creamy sweetness and nutty aroma.</p>
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
                    <h2>Salted Caramel</h2>
                    <p>Salted caramel ice cream combines creamy caramel ice cream with swirls of rich caramel sauce and a hint of sea salt.</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}





export default Comp1