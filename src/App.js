import Nav from "./Nav.js"
//import Head from "./Head"
import Body from "./Body"
import  Bodytwo from "./Body2.js"
import {useState, useEffect} from "react"
import "./App.css"
import Footer from "./Footer1.js"
import Bodythree from "./Body3.js"
import Welcome from "./Welcome.js"
function App() 
{
  const[loading, setLoading]=useState(true)
  useEffect(()=>{
    const  timer=setTimeout(() => setLoading(false),5000 );
    return  ()=> clearTimeout(timer);
     
  },[]);

  return(
    <div className="container">
      {loading?(
        <div className="welcome-message">
         <div className=" background-animation">
          <Welcome/>
        </div>
        </div>
      ):(
        <div>
          <Nav/>
        <div> 
          <Body/>
        </div>
        <div>
          <Bodytwo/>
          <Bodythree/>
        </div>
        <div>
          <Footer/>
        </div> 

        </div>)}
    </div>
  );

}

export default App;
