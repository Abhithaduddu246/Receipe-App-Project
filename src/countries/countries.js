import axios from "axios";

import { Component } from "react";





class CountriesComponent extends Component{
    state={
        countriesList:[],
        loader:true,
        error:false
    }

    fetchCountriesOfficial=async()=>{
           try{
            const response=await axios.get("https://restcountries.com/v3.1/all");
            console.log(response);
            if(response.status===200){
                this.setState({
                    countriesList:response.data,
                    loader:false,

                })
            }
            console.log(this.state.countriesList)
           }catch(err){
            this.setState({
                error:false,
                loader:false,
            })
           }
        
    }
    componentDidMount=()=>{
        this.fetchCountriesOfficial()
    }
    render(){
        return(

            <>
            {/* <button onClick={this.fetchCountriesOfficial}>Country Names</button> */}
            {this.state.loader ? <h1>please wait....</h1>: (
                <>{this.state.countriesList.map((each)=>{
                    return(<h3>{each.name.official}</h3>)
                })}</>
            )}
            </>

        )
    }
}

export default CountriesComponent;