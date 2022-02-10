// Code SimpleComponent Here

import React from 'react'

class SimpleComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        mood: 'happy'
      };
    }

    handleClick = () => {
        const newMood = this.state.mood === 'happy'? 'sad':'happy'
        this.setState({mood: newMood})

    }
    
    render(){
        return (
            <div onClick={this.handleClick}><h1>{this.state.mood}</h1>

            </div>

        )
    }

}

export default SimpleComponent
