import React from "react"
import "./Comp.css"
import image1 from "./photos/humwrap.jpeg"
import image2 from "./photos/zucchini.jpeg"
import image3 from "./photos/korma.jpeg"

function  Comp3() {
    return (
        <div className="comp">
            <h4>Healthy</h4>
            <a href="#">
             <div class="card">
                <div class="card-image">
                     <img src={image1} alt="1"></img>
                </div>
                <div class="card-content">
                    <h5>March 2024</h5>
                    <h2>Hummus Wrap</h2>
                    <p>This wrap is packed with fiber, vitamins, and minerals from the vegetables and provides plant-based protein and healthy fats from the hummus.</p>
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
                    <h2>Zucchini Noodles</h2>
                    <p>This dish is low in carbs and calories compared to traditional pasta dishes but still offers plenty of flavor and nutrition. It's a great way to incorporate more vegetables into your diet.</p>
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
                    <h2>Vegetable Korma</h2>
                    <p> The sauce is flavored with spices such as cardamom, cinnamon, and cloves. This dish is satisfying and nutritious, especially when served with whole wheat naan or brown rice.</p>
                    <h4>Lets get cookin!</h4>
                </div>
                <div className="overlay">
                
                </div>
            </div>
             </a>
        </div>
    )}


export default Comp3