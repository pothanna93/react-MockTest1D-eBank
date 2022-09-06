import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const HomeRoute = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <div className="home-container">
      <nav className="home-nav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="web-logo"
        />
        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </nav>
      <h1 className="card-title">Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
        className="card-image"
      />
    </div>
  )
}
export default HomeRoute
