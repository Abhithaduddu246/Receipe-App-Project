import axios from "axios";
import { useState,useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./receipes.css";
import Footer from "../imagecustom/footer";
import { RecipeContext  } from "../navigation/navigation";

import { Link } from "react-router-dom";



const ReceipeContent = () => {
  
  const {recipeList, addFavouriteDishHandler} = useContext(RecipeContext);
 
  console.log(recipeList,"recepie lists");

 const addFoodHandler=(eachFood)=>{
  addFavouriteDishHandler(eachFood);

 };
 



  return (
    <>
      
          <center>
            <h1 className="title"  >Get Your Recipes Here</h1>
          </center>
          <div className="receipe-container">
            {recipeList  && recipeList.length > 0 && recipeList.map((eachReceipe, index) => {
              const { name, image } = eachReceipe;
              return (
               <div className="receipe-card" key={index}>
                  <h3 className="receipe-name">{name}</h3>
                  <img src={image} alt={name} className="receipe-image" />
                  {
                    eachReceipe.existsInFavourite ?(
                      <button className="see-more-button" ><Link to={"/favourite"} style={{color:"white",textDecoration:"none"}}>Go to fav</Link></button>
                    ):(
                      <button className="see-more-button" onClick={()=>addFoodHandler(eachReceipe)}>Add To Fav{" "}</button>
                    )
                  }
                  
                </div>
              );
            })}
          </div>
          
        
      
    
      <Footer />
    </>
  );












};

export default ReceipeContent;
