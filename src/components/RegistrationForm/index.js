import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {fName: '', lName: '', fblur: false, lblur: false, submit: true}

  firstBlur = () => {
    const {fName} = this.state
    if (fName === '') {
      this.setState({fblur: true})
    } else {
      this.setState({fblur: false})
    }
  }

  secondBlur = () => {
    const {lName} = this.state
    if (lName === '') {
      this.setState({lblur: true})
    } else {
      this.setState({lblur: false})
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
    const {fName, lName} = this.state
    if (fName === '' || lName === '') {
      console.log('Not Submitted')
      this.setState({fblur: true, lblur: true})
    } else {
      console.log('Submitted')
      this.setState({submit: false})
    }
  }

  submitAgain = () => {
    this.setState({
      fName: '',
      lName: '',
      fblur: false,
      lblur: false,
      submit: true,
    })
  }

  renderForm = () => {
    const {fName, lName, fblur, lblur} = this.state

    return (
      <div className=" main">
        <form onSubmit={this.onSubmitFrom}>
          <h1>Registration</h1>
          <div className="col input-section">
            <label htmlFor="fname">FIRST NAME</label>
            <input
              placeholder="First name"
              type="text"
              id="fname"
              value={fName}
              onBlur={this.firstBlur}
              onChange={this.firstChnage}
            />
            {fblur ? <p className="alert">Required</p> : ''}
            <br />
            <label htmlFor="lname">LAST NAME</label>
            <input
              placeholder="Last name"
              type="text"
              id="lname"
              value={lName}
              onBlur={this.secondBlur}
              onChange={this.secondChnage}
            />
            {lblur ? <p className="alert">Required</p> : ''}
            <br />
            <div className="but-container">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderResult = () => {
    console.log('ksbf')
    return (
      <div className="main">
        <form onSubmit={this.onSubmitFrom}>
          <h1>Registration</h1>
          <div className="col input-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <div className="but-container">
              <button type="button" onClick={this.submitAgain}>
                Submit Another Response
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  render() {
    const {submit} = this.state

    let result
    if (submit) {
      result = this.renderForm()
    } else {
      result = this.renderResult()
    }
    return result
  }
}

export default RegistrationForm
