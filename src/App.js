import React, {Component} from 'react'
import './App.css';
import Button from './components/Button';
import Input from './components/Input'
import ClearButton from './components/ClearButton';
import Delete from './components/Delete';

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

  addZeroToInput = val =>{
    if(this.state.input !== ""){//se tem algum número
      this.setState({input:this.state.input+val});
    }
  }

  addDecimal = val =>{
    //só add um decimal se não houver outro ponto
    if(this.state.input.indexOf(".")===-1){//===-1 significa que não tem tal coisa
      this.setState({input: this.state.input + val})
    }
  }

  clearInput = ()=>{
    this.setState({input:""});
  }

  deleteFromInput=()=>{
    

    this.setState({input:this.state.input.substr(0, (this.state.input.length-1))});
  }


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
            <ClearButton handleClear={this.clearInput}>C</ClearButton>
            <Delete handleDelete = {this.deleteFromInput}>Del</Delete>
          </div>

          <div className="row">
            <Button>π</Button>
            <Button>Sen</Button>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button >÷</Button>
          </div>

          <div className="row">
            <Button>e</Button>
            <Button>Cos</Button>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button>*</Button>
          </div>

          <div className="row">
            <Button>X!</Button>
            <Button>Tan</Button>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button>−</Button>
          </div>

          <div className="row">
            <Button>%</Button>
            <Button>Git</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button>=</Button>
            <Button>+</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
