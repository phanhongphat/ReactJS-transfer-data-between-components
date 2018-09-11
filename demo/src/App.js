import React, { Component } from 'react';
import A from './A'
import B from './B'

class App extends Component {
    state = {
        h: 2
    }
    abc = (a) => {
       return (<B display = {a}/>)
    }
    funcApp =(a) => {
        console.log(a)
    }

  render() {
        let h = this.state.h
    return (
      <div className="App">
          <A callBack1 = {this.funcApp}>
              {
                  this.abc(h)
              }

          </A>
      </div>
    );
  }
}

export default App;
