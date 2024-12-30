import { Component } from "react";
import React from "react";




class FetchExample extends Component{
    state={
        products:[],
        loader:true,
        error:false,
    };
    fetchproducts=()=>{
        fetch("https://fakestoreapi.com/products")
               .then((res)=>res.json())
               .then((data)=>this.setState({
                products:data,loader:false,
               }

               ))
    }
    render(){
        return(
          <React.Fragment>
          <div>
            <button  onClick={this.fetchproducts}>Fetch Data</button>
            {this.state.loader?(<h2>please wait....</h2>):
            <div key={this.id}>
            {this.state.products.map((each)=>{
                return<h3>{each.description}</h3>
            })}
            </div>
            }
          </div>
          </React.Fragment>
        )
    }
}
export default FetchExample;