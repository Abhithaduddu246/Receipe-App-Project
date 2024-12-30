import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../sites/home-screen"
import SeeMore from "../sites/seemore"
import ReceipePage from "../sites/receipes-screen"
import ReceipeDetails from "../sites/receipe-details"
import NavBar from "../navbar/navbar"
import RegistrationForm from "../sites/registration"
import FavList from "../sites/favourite"
import { createContext, useEffect, useState } from "react"
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from "../sites/search"



 export const RecipeContext=createContext()


const NavigationSite=()=>{
    const[recipeList,setRecipeList]=useState([]);
    const[favouriteDish,setFavouriteDish]=useState([]);
    useEffect(()=>{
        fetchReceipes();
    },[]);

    const fetchReceipes = async () => {
        
        try {
          const { status, data } = await axios.get('https://dummyjson.com/recipes');
          const newData=data.recipes.map((EachData)=>{
            return{...EachData,existsInFavourite:false}
          })

          if (status === 200) {
            console.log(data);
            setRecipeList(newData);
           
          }
        } catch (err) {
          
         
        }
      };

      const addFavouriteDishHandler=(newDish)=>{
        const recipeExists=favouriteDish.find(
          eachFood=>eachFood.id==newDish.id);
     const newRecipesList=recipeList.map(each=>{
      if(each.id==newDish.id){
        return {...each,existsInFavourite:true}

      }
      else{
        return each;
      }
     });
     setRecipeList(newRecipesList);

          if(recipeExists){
           
            toast.error("already in your favourites",{
              position:"top-right",
            })

          }
          else{
            setFavouriteDish([...favouriteDish,newDish]);
            toast.success("added to favourites",{
              position:"top-right",
            });
          }

        
      };


      const removeFromFavourite=(id)=>{
        const newRecipesList=recipeList.map(each=>{
          if(each.id==id){
            toast.error("your item is removed",{
              position:"top-right",
            })
            return {...each,existsInFavourite:false}
    
          }
          else{
            return each;
          }
         });
         setRecipeList(newRecipesList);
        const newFavouriteList=favouriteDish.filter(
          eachDish=>eachDish.id!=id);
        setFavouriteDish(newFavouriteList);


      };
    return(
        <>
        <RecipeContext.Provider
         value={{
            recipeList:recipeList,
            favouriteDish:favouriteDish,
            addFavouriteDishHandler:addFavouriteDishHandler,
            removeFromFavourite:removeFromFavourite,
        }}>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/receipes" element={<ReceipePage/>}></Route>
            <Route path="/receipe-details" element={<ReceipeDetails/>}></Route>
            <Route path="/:RecipiId" element={<SeeMore/>}></Route>
            <Route path="/favourite" element={<FavList/>}></Route>
            <Route path="/search" element={<Search/>}></Route>

            <Route path="/contact" element={<RegistrationForm/>}></Route>
           
        </Routes>
        
        </BrowserRouter>
        <ToastContainer></ToastContainer>
        </RecipeContext.Provider>

       
        
        
        </>
    );
};


export default NavigationSite;