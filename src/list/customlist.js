const CustomList=(prop)=>{
    const {list}=prop;

    return(
        <ul>
        {list.map((eachItem)=>(
            
            <li style={{marginLeft:"10px"}}>{eachItem}</li>
            
        ))}
         </ul>
       
    )


};
export default CustomList;