import { useContext } from "react";
import { RecipeContext } from "../navigation/navigation";
import "./receipes.css"





const FavList=()=>{
    const {favouriteDish,removeFromFavourite}=useContext(RecipeContext);

    const removeHandler=(eachFood)=>{
        removeFromFavourite(eachFood.id);

    };
   
    return(
        <>
        <h1  style={{color:"#AF47D2",fontFamily:"cursive",textAlign:"center"}}>Get Your Favourites Here</h1>
        {favouriteDish.length>0 ?(
            <>
           {favouriteDish.map((eachReceipe,index)=>{
             const { name, image } = eachReceipe;

            return(
                <>
                 <div className="receipe-container">
                <div className="receipe-card" key={index}>
                  <h3 className="receipe-name">{name}</h3>
                  <img src={image}  className="receipe-image" />
                  <button className="see-more-button" onClick={()=>removeHandler(eachReceipe)}>Remove</button>
                </div>
                </div>
                
                
                </>
            )


           })}
            
            
            </>):<h4 style={{textAlign:"center"}}>No dishes found</h4>
        }
        
        </>
    )
}
export default FavList;
