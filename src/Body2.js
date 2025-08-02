import React from "react"
import "./Body2.css"
import {useEffect, useState} from "react"
import Comp1 from "./Comp1"
import Comp2 from "./Comp2"
import Comp3 from "./Comp3"
import Comp4 from "./Comp4"
import Comp5 from "./Comp5"
import Comp6 from "./Comp6"
import Comp7 from "./Comp7"
import Comp8 from "./Comp8"
import Comp9 from "./Comp9"
import Comp10 from "./Comp10"


function Bodytwo()
{
  const [recipes, setRecipes] = useState(Comp1);
  useEffect(()=>{
    console.log("render")
  },[])

  function Ice_cream()
      {
      setRecipes(()=> {
          return (
              <Comp1/>
          )
    
      })};
  function Desserts()
      {
      setRecipes(()=> {
          return (
              <Comp2/>
        )
      })};
  function Healthy()
      {
      setRecipes(()=> {
          return (
              <Comp3/>
      
        )
      })};
  function Craving()
      {
      setRecipes(()=> {
          return (
              <Comp4/>
        )
      })};
  function Vegan()
      {
      setRecipes(()=> {
          return (
              <Comp7/>
        )
      })};
  function Salads()
      {
      setRecipes(()=> {
          return (
              <Comp5/>
        )
      })};   
  function Baked()
      {
      setRecipes(()=> {
          return (
              <Comp6/>
        )
      })};
  function High_protien()
      {
      setRecipes(()=> {
          return (
              <Comp8/>
        )
      })};

  function Smoothies()
      {
      setRecipes(()=> {
          return (
              <Comp10/>
        )
      })};
  function Hot_Bev()
      {
      setRecipes(()=> {
          return (
              <Comp9/>
        )
      })};

    return (
    <>
       <div className="grid-container">
          <button onClick={Craving}><div className="grid-item"><i class="fas fa-hamburger"></i></div></button>
          <button onClick={Healthy}> <div className="grid-item"><i class="fas fa-apple-alt"></i></div></button>
          <button onClick={Ice_cream}><div className="grid-item"><i class="fas fa-ice-cream"></i> </div></button>
          <button onClick={Vegan}><div className="grid-item"> <i class="fas fa-seedling"></i></div></button>
          <button onClick={Hot_Bev}><div className="grid-item"><i class="fas fa-coffee"></i></div></button>
          <button onClick={Baked}><div className="grid-item"><i class="fas fa-cookie"></i></div></button>
          <button onClick={High_protien}><div className="grid-item"><i class="fas fa-drumstick-bite"></i></div></button>
          <button onClick={Smoothies}><div className="grid-item"><i class="fas fa-blender"></i></div></button>
          <button onClick={Desserts}><div className="grid-item"><i class="fas fa-cheese"></i></div></button>
          <button onClick={Salads}><div className="grid-item"><i class="fas fa-leaf"></i></div></button>
         </div> 
      <div className="info">
        <h1> {recipes}</h1>
      </div>
    </>
    );
}


export default Bodytwo

