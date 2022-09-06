import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {user_id: username, pin: password}

    const apiLogin = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiLogin, options)
    console.log(response)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="username-div">
        <label htmlFor="password" className="label-element">
          PIN
        </label>
        <input
          type="password"
          id="password"
          className="input-element"
          onChange={this.onChangePassword}
          value={password}
          placeholder="Enter PIN"
        />
      </div>
    )
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="username-div">
        <label htmlFor="username" className="label-element">
          User ID
        </label>
        <input
          type="text"
          id="username"
          className="input-element"
          onChange={this.onChangeUsername}
          value={username}
          placeholder="Enter User ID"
        />
      </div>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="responsive-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-image"
          />
          <div className="form-container">
            <div className="form-div">
              <h1 className="heading">Welcome Back!</h1>
              <form className="form" onSubmit={this.onSubmitForm}>
                {this.renderUsername()}
                {this.renderPassword()}
                <button type="submit" className="btn-element">
                  Login
                </button>
                {showSubmitError && <p className="error-msg">{errorMsg}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginPage
