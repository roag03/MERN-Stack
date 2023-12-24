import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Greet from './component/Greet';
import Welcome from './component/welcome';
import Message from './component/message';
import Counter from './component/Counter';
function App() {
  return (
    <div className="App">
     <Greet name= "Anant" rohitName="bhai">
      <p>This Is my designing skill hehehe</p>
      </Greet>
     <Greet name="Yash" rohitName="bhai">
      <button>Ghanta</button>
      </Greet>
     <Greet name="Radhey" rohitName="Devi Ji"/>
     <Welcome name="mitansha" rohitName="Kaleshi"/>
<Hello/>
     <Welcome name="Yash " rohitName="chor"/>
     <Welcome name="Anant" rohitName="Jadugar"/>
     <Message/>

     <Counter/>
    </div>
  );
}

export default App;
