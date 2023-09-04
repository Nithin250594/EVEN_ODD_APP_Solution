// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNum: 0}

  increment = () => {
    this.setState(prev => ({
      randomNum: prev.randomNum + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {randomNum} = this.state
    let evenOdd = null

    if (randomNum % 2 === 0) {
      evenOdd = 'Even'
    } else {
      evenOdd = 'Odd'
    }

    return (
      <div className="Count-Bg">
        <h1 className="Count-title">Count {randomNum}</h1>
        <p className="Count-para">Count is {evenOdd}</p>
        <button type="button" onClick={this.increment} className="button-style">
          Increment
        </button>
        <p className="message"> *Increase By Random Number Between 0 to 100 </p>
      </div>
    )
  }
}

export default EvenOddApp
