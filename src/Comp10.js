import "./Comp.css" 
import React from "react"
import image1 from "./photos/sunshine.jpeg"
import image2 from "./photos/unicorn.jpeg"
import image3 from "./photos/jungle.webp"

function  Comp10() {
    return (
        <div className="comp">
            <h4>Smoothies</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Sunshine Bliss Smoothie</h2>
                    <p>Close your eyes, feel the warm sun on your face, and let the vibrant flavors dance on your taste buds. It's like sipping sunshine in a glass!</p>
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
                    <h2>Mystical Unicorn Smoothie Bowl</h2>
                    <p> With its pastel pink hue and sparkling flavor, it's like sipping on the elixir of unicorns themselves. Embrace the magic and let your taste buds gallop into the fantastical world of unicorns!</p>
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
                    <h2>Jungle Jambo Smoothie</h2>
                    <p>. With its tropical melody of flavors and lush green hue, it's like sipping on a jungle symphony! Grab your safari hat and get ready to swing from vine to vine with the Jungle Jambo!</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp10