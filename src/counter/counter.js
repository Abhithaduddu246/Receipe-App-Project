import React, { Component } from 'react';
import "./counter.css"

class Counter extends Component {

    state = {
      count: 0,
    };
  

  increment = () => {
    this.setState( {
      count:this.state.count+ 1,
    });
  };

  decrement = () => {
    this.setState({
      count:this.state.count - 1,
    });
  };
  reset = () => {
    this.setState({
      count:0,
    });
  };


  render() {
    return (
        <>
        <h1 style={{textAlign:"center",fontFamily:"cursive"}}>Let's Count Here</h1>
      <div className='button-card'>
        <h2>Your Count: {this.state.count}</h2>
        <div className='button-onclick'>
        <button onClick={this.increment}>Increment</button><br/>
        <button onClick={this.decrement}>Decrement</button><br/>
        <button onClick={this.reset}>Reset</button>
        </div>
      </div>
      </>
    );
  }
}

export default Counter;