import { useEffect, useState } from 'react'
import { User as UserModel } from '../model/User'
import Reaction from './reaction/Reaction'
import ReactionService from './reaction/ReactionService'

//ui/user module
//aceasta componenta raspunde de felul cum apare pe ecran, de cum interactioneaza cu clientul
const User = ({ userObject, viewMode }) => {
  let [online, setOnline] = useState(true)
  let [reactions, setReactions] = useState('')

  // console.log(a[0].type)

  // validate the user object

  if (userObject !== null && !(userObject instanceof UserModel)) {
    throw new TypeError(
      'ui/User component only accepts only objects of class model',
    )
  }

  useEffect(() => {
    console.info('User component did mount or update')
    // console.log(ReactionService())
    ReactionService().then((reactions) => {
      setReactions(reactions)
      console.log(reactions)
      return reactions
    })
    // console.dir(userObject)
  }, [online])

  if (userObject === null) {
    return <div className="User">loading...</div>
  } else {
    const { nickname, avatar, lastOnline } = userObject

    //render
    return (
      <div className="User">
        {viewMode === 'compact' ? (
          <div>
            <img src={avatar} width="80px" />
          </div>
        ) : (
          <div>
            <img src={avatar} />
            <Reaction reactions={reactions} />
            <h2>{nickname}</h2>
            <p>{lastOnline}</p>
          </div>
        )}

        {online ? (
          <span style={{ color: 'green', fontSize: '50px' }}>◉</span>
        ) : (
          <span style={{ color: 'gray', fontSize: '50px' }}>◉</span>
        )}
      </div>
    )
  }
}

export default User
