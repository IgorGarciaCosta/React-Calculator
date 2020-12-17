import React, { Component } from 'react'
import './App.css';
import Button from './components/Button';
import Input from './components/Input'
import ClearButton from './components/ClearButton';
import Delete from './components/Delete';

class App extends Component {
  constructor(props) {//fiz o cosntrutor pq to usando setState
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    }
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {//se tem algum número
      this.setState({ input: this.state.input + val });
    }
  }

  addDecimal = val => {
    //só add um decimal se não houver outro ponto
    if (this.state.input.indexOf(".") === -1) {//===-1 significa que não tem tal coisa
      this.setState({ input: this.state.input + val })
    }
  };

  clearInput = () => {//apaga todos os caracteres
    this.setState({ input: "" });
  };

  deleteFromInput = () => {//apaga apenas um caracter
    if (!this.state.input) {
      this.setState({ input: "vazio" })
    }
    else { 
      this.setState({ input: this.state.input.toString().substr(0, (this.state.input.length - 1)) }); 
    }
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus"
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input
    if (this.state.operator == "plus") {
      this.setState({
        input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
      });
    }

    else if (this.state.operator == "subtract") {
      this.setState({
        input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
      });
    }

    else if (this.state.operator == "multiply") {
      this.setState({
        input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
      });
    }

    else if (this.state.operator == "divide") {
      this.setState({
        input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
      });
    }
  }

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract"
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply"
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide"
  };




  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>C</ClearButton>
            <Delete handleDelete={this.deleteFromInput}>Del</Delete>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>÷</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.subtract}>−</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.add}>+</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
