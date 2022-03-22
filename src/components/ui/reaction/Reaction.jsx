import { useState } from 'react'

import { BiLike } from 'react-icons/bi'
import { BsSuitHeart } from 'react-icons/bs'

import './reaction.styles.scss'

const Reaction = ({ reactions }) => {
  console.log(reactions)
  const [active, setActive] = useState(false)
  const [currentIcon, setCurrentIcon] = useState('')
  const clickHandler = () => {
    setActive(true)
    console.log(reactions.api[0].icon)
  }
  return (
    <div className="like-container">
      {active ? (
        <div className="icons-container" id="love-div">
          {reactions.api.map((reaction) => (
            <button
              key={reaction.type}
              className="icon"
              onClick={() => {
                setCurrentIcon(reaction.type)
                console.log(reaction.type)
              }}
            >
              <img src={reaction.icon} style={{ width: 20 }} />
            </button>
          ))}
        </div>
      ) : (
        ''
      )}

      <button className="main-btn" onClick={clickHandler}>
        <img src={reactions.api[0].icon} style={{ width: 30 }} />{' '}
        <span>Like</span>
      </button>
    </div>
  )
}

export default Reaction
