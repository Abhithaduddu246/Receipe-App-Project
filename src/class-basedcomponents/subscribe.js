import { Component } from "react";
import Counter from "../conditional-rendering/conditions";




class SubscribeComponent extends Component{
    state={
        isSubscribe:true,
        text1:"Subscribe",
        text2:"Subscribed",
    }
    handleClick=()=>{
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe,
            }
        )
    }

    render(){
        return(
            <>
            <button onClick={this.handleClick}>

               {this.state.isSubscribe? this.state.text2:this.state.text1}
               
            </button>
            {this.state.isSubscribe? <><h1>Thanks for subscribing</h1><Counter></Counter></>:<><h1>Please Subscribing to access the content</h1></>}
            </>


        )
    }
}

export default SubscribeComponent;