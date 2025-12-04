import React from "react";

class IncreDecre extends React.Component{
    constructor(){
        super();
        this.state={initialvalue:0}

    }
    increment=()=>{
        this.setState({initialvalue:this.state.initialvalue +1});
    }
    decrement=()=>{
        this.setState({initialvalue:this.state.initialvalue -1});
    }
    reset=()=>{
        this.setState({initialvalue:0});
    }
    render(){
        return<div>
            <h1>{this.state.initialvalue}<span> </span></h1>
            <br />
            <button type="button" onClick={this.increment}>Increment</button>
            <button type="button" onClick={this.decrement}>decrement</button>
            <button type="button" onClick={this.reset}>reset</button>
        </div>
    }
}
export default IncreDecre;