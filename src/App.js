import React, {Component} from 'react'
import './App.css';
import Button from './components/Button';
import Input from './components/Input'

class App extends Component {
  constructor(props){//fiz o cosntrutor pq to usando setState
    super(props);
    this.state = {
      input:"",
      previousNumber:"",
      currentNumber:"",
      operator: ""
    }
  }

  addToInput = val=>{
    this.setState({input: this.state.input + val});
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button>√</Button>
            <Button>x^2</Button>
            <Button>(</Button>
            <Button>)</Button>
            <Button>C</Button>
            <Button>Del</Button>
          </div>

          <div className="row">
            <Button>π</Button>
            <Button>Sen</Button>
            <Button handleClick={this.addToInput}>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>÷</Button>
          </div>

          <div className="row">
            <Button>e</Button>
            <Button>Cos</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>*</Button>
          </div>

          <div className="row">
            <Button>X!</Button>
            <Button>Tan</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>−</Button>
          </div>

          <div className="row">
            <Button>%</Button>
            <Button>Git</Button>
            <Button>0</Button>
            <Button>.</Button>
            <Button>=</Button>
            <Button>+</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
