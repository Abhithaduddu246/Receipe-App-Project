 import { imgData } from "./imagelist";
import "./img.css"
 import CustomProgressBar from "./progressbar";

 
 
 const CustomImage=(prop)=>{
    const{properties}=prop;

    const Percentage=(input)=>{
        const Base=17;
        console.log(input)
         let percentage = (input/Base)*100;
        return percentage;
      }
    return(
        <>
         <h2> <center>IPL TEAMS</center></h2>
         <div className="Main">
        {
        properties.map(eachTeam=>{
            const{id,name,source,description,players,button,trophy}=eachTeam;

           
            return(
                <>
               
                <div className="imgcard" style={{display:"flex"}}>
                <div className="child"><h3>{name}</h3></div>
                <div className="child"><center><img src={source} width={250} height={200}/></center></div>
               <div className="child"> <p>{description}</p></div>
                <div className="child"><h4>{players}</h4></div>
                <div className="child"><h5>Trophy:{trophy}</h5></div>
                <center> <div className="progress"><CustomProgressBar scale={Percentage(trophy)}/></div></center> <br/>
                <div className="child"><center><button>{button}</button></center></div>
                </div>
                </>
            )
        })
        
}
</div></>);
};
export default CustomImage;