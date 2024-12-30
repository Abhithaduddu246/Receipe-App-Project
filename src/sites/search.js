import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";


const Search = () => {
  const [recipeList, setRecipeList] = useState([]);
 
  const [search, setSearch] = useState(''); 
  const [filters, setFilter] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipeList(data.recipes);
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredRecipes = recipeList.filter(recipe =>
      recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilter(filteredRecipes);
  };

  return (
    <>
   
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search recipes..."
        className="search-input"
      />
     




<div className="receipe-container">

{filters.length>0 ?
<>{filters.map((recipe,index)=>{
    const { name,image}=recipe;
    return(
        <>
         <div className="receipe-card" key={index}>
                  <h3 className="receipe-name">{name}</h3>
                 <img src={image} alt={name} className="receipe-image" />        
                            <button className="see-more-button" ><Link to={`/${recipe.id}`} style={{color:"white",textDecoration:"none"}}>Details</Link></button>
                 </div>
        
        
        </>



    )
})}


</>:<>{recipeList.map((each,index)=>{
    const { name,image}=each;
     return(
        <>
         <div className="receipe-card" key={index}>
                  <h3 className="receipe-name">{name}</h3>
                 <img src={image} alt={name} className="receipe-image" />        
                            <button className="see-more-button" ><Link to={`/${each.id}`} style={{color:"white",textDecoration:"none"}}>Details</Link></button>
                 </div>
        
        
        </>



    )
    
})}</>


}


    </div>
    </>
  );
};

export default Search;



// {filters.length > 0 ?<> filters.map((recipe,index)=>{
//     const {name , image}=recipe;
    
    
//     return(
//         <>
//          <div className="receipe-card" key={index}>
//                   <h3 className="receipe-name">{name}</h3>
//                   <img src={image} alt={name} className="receipe-image" />
//                   <button className="see-more-button" ><Link to={`/${search.id}`} style={{color:"white",textDecoration:"none"}}>Details</Link></button>
//                 </div>
        
        
//         </>
//     )
    
    
//     </>
    
   
// })}