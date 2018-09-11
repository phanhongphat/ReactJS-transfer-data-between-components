import React, { Component } from 'react';
import A from './A'
import B from './B'

class App extends Component {
    state = {
        h: 2
    }


  render() {

    return (
      <div className="App">
        <A render = {(h) => (<B display ={h}/>)}/>
      </div>
    );
  }
}

export default App;
