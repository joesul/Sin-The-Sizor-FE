import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Lazer from './Lazer';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      context: null,
      score: 0,
      gameStatus: 0
    },
    this.lazer = [];
  }

  startGame() {
    this.setState({
      screen: {
   width: window.innerWidth,
   height: window.innerHeight,
   ratio: window.devicePixelRatio || 1,
 },
      gameStatus: 1,
      score: 0
    });

    let lazer = new Lazer({
      position: {
        x: this.state.screen.width/2,
        y: this.state.screen.height/2
      },
      create: this.createObject.bind(this),
      onDie: this.gameOver.bind(this)
    });
    this.createObject(lazer, 'lazer');
  }

  endGame() {
    this.setState({
      gameStatus: 0
    });
  }

  addScore(points) {
    if (this.state.gameStatus) {
      this.setState({
        score: this.state.score + points
      });
    }
  }

  update() {
    const ctx = this.state.context;
    const lazer = this.lazer[0];

  ctx.save();
  ctx.scale(this.state.screen.ratio, this.state.screen.ratio);

  ctx.fillStyle = '#000';
  ctx.globalAlpha = 0.4;
  ctx.fillRect(0, 0, this.state.screen.width, this.state.screen.height);
  ctx.globalAlpha = 1;
  // Remove or render
  this.updateObjects(this.lazer, 'lazer')

  ctx.restore();

  // Next frame
  requestAnimationFrame(() => {this.update()});
  }

  handleControls(event) {
    console.log("hi");
  }

  componentDidMount() {
    console.log(this.handleControls);
    window.addEventListener('keyup', this.handleControls.bind(this), false);
    window.addEventListener('keydown', this.handleControls.bind(this), true);

    const ctx = this.refs.canvas.getContext('2d');
    this.setState({ context: ctx });
    this.startGame();
    requestAnimationFrame(() => {this.update()});
    ctx.fillStyle = '#FFFFF'
    ctx.fillRect(0, 0, 10, 10);
  }

  createObject(item, group){
    this[group].push(item);
  }

  updateObjects(items, group){
   let index = 0;
   for (let item of items) {
     if (item.delete) {
       this[group].splice(index, 1);
     }else{
       items[index].render(this.state);
     }
     index++;
   }
 }

  render() {

    return (
      <div className="contianer">
        <div className="App">
          <canvas ref="canvas"
            width={1000}
            height={500}
            />
        </div>
        <Keyboard />
      </div>
    );
  }
}

export default App;
