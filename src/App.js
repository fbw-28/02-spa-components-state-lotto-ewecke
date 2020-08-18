
import "./main.css"
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    lottoNunbers: [],
    reset: null
  };


 newNumbers = () => {

    const result = [];
    let rNumber= 0;

    for (let i = 0; i < 6; i++) {
        rNumber = Math.floor(Math.random(1) * 49);
        if (result.includes(rNumber)) {
            rNumber = Math.floor(Math.random(1) * 49);
            i--;
        } else {
            result.push(rNumber);    
        }
    }
    console.log(result[0]);
    console.log(result);
/*     this.setState({ lottoNunbers: result }); */
};

  render() {
    return (
      <div className="App">
        <div className="content">
          <h1>Generating lucky number</h1>
          <div className="container">
            <div className="lotto"> {this.newNumbers()}</div>
            <div className="lotto"> 02</div>
            <div className="lotto"> 03</div>
            <div className="lotto"> 04</div>
            <div className="lotto"> 05</div>
            <div className="lotto"> 06</div>
            {/* <div className="glorynumber">01</div> */}
          </div>
          <button>Reset</button>
          <button>Show me luck numbers</button>
        </div>
      </div>
    )
  }
}

/* {console.log(item1[0])};
{console.log(item1)};
{console.log(newNumbers())}; */