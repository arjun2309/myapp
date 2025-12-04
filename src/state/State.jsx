import React from "react";
class State extends React.Component{
    constructor(){
        super();
        this.state={initialvalue:"Welcome",name:"All"}

    }
    change=()=>{
        this.setState({initialvalue:"Thank you"});
    }
    render(){
        return<div>
            <h1>{this.state.initialvalue}<span> </span>{this.state.name}</h1>
            <br />
            <button type="button" onClick={this.change}>Exit</button>
        </div>
    }
}
export default State;