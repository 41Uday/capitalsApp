import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {text: countryAndCapitalsList[0].country}

  changeText = event => {
    const val = event.target.value
    console.log(val)
    const res = countryAndCapitalsList.filter(e => e.id === val)
    console.log(res)
    console.log(res.country)
    this.setState({text: res[0].country})
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head">Countries And Capitals</h1>
          <div className="drop-card">
            <select className="drop" onChange={this.changeText}>
              <option value={countryAndCapitalsList[0].id}>
                {countryAndCapitalsList[0].capitalDisplayText}
              </option>
              <option value={countryAndCapitalsList[1].id}>
                {countryAndCapitalsList[1].capitalDisplayText}
              </option>
              <option value={countryAndCapitalsList[2].id}>
                {countryAndCapitalsList[2].capitalDisplayText}
              </option>
              <option value={countryAndCapitalsList[3].id}>
                {countryAndCapitalsList[3].capitalDisplayText}
              </option>
              <option value={countryAndCapitalsList[4].id}>
                {countryAndCapitalsList[4].capitalDisplayText}
              </option>
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="para-2">{text}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
