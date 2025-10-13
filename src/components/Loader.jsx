import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="graduation-cap">
          🎓
        </div>
        <div className="loader-text">
          <h2>GenZ Step</h2>
          <p>Loading your educational journey...</p>
        </div>
        <div className="loading-dots">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader