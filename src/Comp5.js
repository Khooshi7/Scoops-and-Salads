import "./Comp.css" 
import React from "react"
import image1 from "./photos/caprese.jpeg"
import image2 from "./photos/southwestsalad.webp"
import image3 from "./photos/quinosalad.jpeg"

function  Comp5() {
    return (
        <div className="comp">
            <h4>Salads</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Caprese Salad</h2>
                    <p>This salad is not only delicious but also provides a good dose of vitamins, minerals, and antioxidants. It's a light and refreshing option that's perfect as a starter or side dish.</p>
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
                    <h2>Southwest Fiesta Salad</h2>
                    <p>Topped with zesty salsa ranch dressing, this salad is a fiesta of flavors that will transport you to the heart of the Southwest with every bite.</p>
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
                    <h2>Roasted Vegetable Quinoa Salad</h2>
                    <p>Dressed with a tangy tahini dressing and sprinkled with toasted pine nuts, this salad is a satisfying and flavorful option that's perfect for lunch or dinner.</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp5