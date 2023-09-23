import './index.css'

const Navbar = props => {
  const {item, score, time} = props
  return (
    <div>
      <div>
        <div className="nav">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <div className="row">
            <p>Score:{score}</p>
            <div className="row">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p>{time} sec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
