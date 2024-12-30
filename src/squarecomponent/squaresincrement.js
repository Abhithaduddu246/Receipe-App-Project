import { Component } from "react";
import "./squares.css";




class SquareComponent extends Component{

    state={
        SquareArray:[],
    }
    addSquareHandler=()=>{
        const newState=[...this.state.SquareArray,1];
    this.setState({
        SquareArray:newState,
    })
     
            
       
    }
    
    render(){
        return(
             <>
             <h1>Click Add Sqaures to add more Squares</h1>
             <button  onClick={this.addSquareHandler}>Add Squares</button><br/><br/><br/>
             <div className="squares">
             {this.state.SquareArray.map((each,index)=>{
                return(
                   
                 <div className={
                    (index+1)%2===0 ? "square-card-highlight":"square-card-nothighlight"}>
                {
                    (index+1)%2===0 ? "Even" :"Odd"
                 }

                   {/* {index+1} */}
                 </div>
              
                );

             })}
                </div>
             
              


             </>

        )
    }
}

export default SquareComponent;