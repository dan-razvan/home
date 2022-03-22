import { useState } from 'react'

import './reaction.styles.scss'

const Reaction = ({ reactions }) => {
  console.log(reactions)
  const [active, setActive] = useState(false)
  const [currentIcon, setCurrentIcon] = useState('')
  const clickHandler = () => {
    active ? setActive(false) : setActive(true)
  }
  return (
    <div className="like-container">
      {active ? (
        <div className="icons-container">
          {reactions.api.map((reaction) => (
            <button
              key={reaction.type}
              className="icon"
              onClick={() => {
                setCurrentIcon(reaction.type)
              }}
            >
              <img src={reaction.icon} style={{ width: 20 }} />
            </button>
          ))}
        </div>
      ) : (
        <div className="icons-container inactive"></div>
      )}

      <button className="main-btn" onClick={clickHandler}>
        <img src={reactions.api[0].icon} style={{ width: 30 }} />{' '}
        <span>Like</span>
      </button>
    </div>
  )
}

export default Reaction
