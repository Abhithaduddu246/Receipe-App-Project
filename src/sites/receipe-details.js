import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 





const ReceipeDetails=()=>{
    const [recipes,setReceipe]=useState([]);
    const [selectedRecipe,setSelectedRecipe]=useState({})
    useEffect(()=>{
        fectchData();

    },[])


    const fectchData=async()=>{
        const {data}=await axios.get("https://dummyjson.com/recipes");
        const structuredData=data.recipes.map((eachReceipe)=>{
    return {id:eachReceipe.id,name:eachReceipe.name,image:eachReceipe.image}
});
console.log(structuredData);
setReceipe(structuredData);
console.log(data);
};

const selectHandler=(event)=>{
    const selectedRecipeId= event.target.value;
    fectchEachRecipe(selectedRecipeId)
  
};

const fectchEachRecipe=async(recipeId)=>{
    const {data}=await axios.get(`https://dummyjson.com/recipes/${recipeId}`);

    setSelectedRecipe(data);

    console.log(data);

}
    
       

   
    return(
        <>

        <h2 style={{color:"#AF47D2"}}>Select your Receipe Here</h2>
        
            {recipes.length > 0 &&  (
        <select onChange={selectHandler}>
            {
                recipes.map((each)=>(
                 <option value={each.id}>{each.name}</option>
            

                ))}
            
       
        </select>
           
           )}

           {

            Object.keys(selectedRecipe).length>0 && <div>
            <div className="receipe-container">
           
                <div className="receipe-card">
                  <h3 className="receipe-name">{selectedRecipe.name}</h3>
                  <img src={selectedRecipe.image}  className="receipe-image" />
                  <button className="see-more-button" ><Link to={`/${selectedRecipe.id}`} style={{color:"white",textDecoration:"none"}}>Details</Link></button>
                </div>
              
        
          </div>
               
            </div>
           }
        
       
        
        </>
    );
};

export default ReceipeDetails;