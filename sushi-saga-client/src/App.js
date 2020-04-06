import React, { Component } from 'react';

import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis:[],
      showItems: 4
    }
  }
  
  componentDidMount(){
    fetch("http://localhost:3000/sushis")
    .then(res =>res.json())
    .then(sushis => {
      this.setState({ sushis: sushis})
    })
  }
  handleShowMore() {
    this.setState({
      showItems: 
        this.state.showItems >= this.state.sushis.length ?
        this.state.showItems : this.state.showItems + 4
    })
  }

  eatSushi = (event) => {

  }

  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} showItems={this.state.showItems}/>
        <Table />
      </div>
    );
  }
}

export default App;