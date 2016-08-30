import React, { Component } from 'react';
import '../stylesheets/Game.css';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    }
  }

  changeColor(event) {
    this.setState({
      color: "black"
    })
  }

  componentDidMount() {
    setInterval(function() {
      console.log("hi");
    }, 1000);
  }

  render() {
    return(
      <div className='container'>
        <div onClick={this.changeColor.bind(this)} style={{background: this.state.color}} className='grid'>1</div>
        <div className='grid'>2</div>
        <div className='grid'>3</div>
        <div className='grid'>4</div>
        <div className='grid'>5</div>
        <div className='grid'>6</div>
        <div className='grid'>7</div>
        <div className='grid'>8</div>
        <div className='grid'>9</div>
        <div className='grid'>10</div>
        <div className='grid'>11</div>
        <div className='grid'>12</div>
      </div>
    )
  }
}

export default Game
