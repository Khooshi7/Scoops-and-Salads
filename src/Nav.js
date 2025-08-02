import React from  'react';
import "./Nav.css"

function Nav()
{
          return (
            <div className="navbar">
              <div className="brand">Scoops & Salads</div>
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Recipies</a></li>
                <li><a href="#">Order</a></li>
              </ul>
            </div>
          );
    
    
}
 export default Nav