import axios from "axios";
import { useEffect, useState } from "react";





const Products=()=>{
    const[data,setData]=useState([])
    useEffect(()=>{
        FetchData();

    },[])
   const FetchData=async()=>{
      const {data,status}=await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      if(status===200){
        setData(data)
      }
   }



    return(
        <>
        <h1>welcome</h1>
        <table>
            <tr>
            <th>Title</th>
            <th>image</th>
            <th>Catagery</th>
            <th>Description</th>
            <th>Price</th>
            <th>Total</th>
            </tr>


            {data.map((eachProduct,index)=>{
                return(
                    <>
                    <tr key={index}>
                    <td>{eachProduct.title}</td>
                    <td>< img src={eachProduct.image}   width={100} height={100}/></td>
                    <td>{eachProduct.category}</td>
                    <td>{eachProduct.description}</td>

                    
                    </tr></>
                )
            })}

        </table>
        
        </>
    )
}

export default Products;