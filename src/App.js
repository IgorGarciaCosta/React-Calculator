
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
        <div className="calc-wrapper">
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
            <Button>7</Button>
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
            <Button>X</Button>
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

export default App;
