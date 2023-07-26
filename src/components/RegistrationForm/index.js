import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {fName: '', lName: '', fblur: false, lblur: false}

  firstBlur = () => {
    const {fName} = this.state
    if (fName === '') {
      this.setState({fblur: true})
    }
  }

  secondBlur = () => {
    const {lName} = this.state
    if (lName === '') {
      this.setState({lblur: true})
    }
  }

  firstChnage = event => {
    const newName = event.target.value
    this.setState({fName: newName})
  }

  secondChnage = event => {
    const newName = event.target.value
    this.setState({lName: newName})
  }

  onSubmitFrom = event => {
    event.preventDefault()
  }

  render() {
    const {fName, lName} = this.state
    return (
      <div className=" main">
        <form onSubmit={this.onSubmitFrom}>
          <h1>Registration</h1>

          <div className="col input-section">
            <label htmlFor="fname">FIRST NAME</label>
            <input
              type="text"
              id="fname"
              value={fName}
              onBlur={this.firstBlur}
              onChange={this.firstChnage}
            />
            <p className="alert">Require</p>
            <br />
            <label htmlFor="lname">LAST NAME</label>
            <input
              type="text"
              id="lname"
              value={lName}
              onBlur={this.secondBlur}
              onChange={this.secondChnage}
            />
            <p className="alert">Require</p>
          </div>
          <div className="but-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
