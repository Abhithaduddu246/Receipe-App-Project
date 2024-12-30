import axios from "axios";
import { useEffect, useState } from "react";



const CountryHomePage=()=>{
    const [countryname,SetCountryname]=useState([]);
    useEffect(()={
      fetchCountriesData();

    },[]);


    const fetchCountriesData=async()=>{
        const {data}=await axios.get("https://restcountries.com/v3.1/all")
       

    }

  return(
        <>
        
        <h1>select the Countries</h1>


        <select>

      <options value={"dish1"}>dish 1</options>
      
      <options value={"dish2"}>dish 2</options>


        </select>
        </>
    );
};

export default CountryHomePage;