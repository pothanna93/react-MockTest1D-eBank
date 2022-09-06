import './index.css'

const img = 'https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png'

const NotFound = () => (
  <div className="not-found-div">
    <img src={img} alt="not found" className="not-img" />
    <h1 className="not-found-head">Page Not Found</h1>
    <p className="not-found-para">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)
export default NotFound
