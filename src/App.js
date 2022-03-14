import User from './components/ui/User'
import { User as UserModel } from './components/model/User'
import { useEffect, useState } from 'react'

const App = () => {
  let [user, setUser] = useState(null)

  useEffect(() => {
    UserModel.get().then((userObject) => {
      setUser(userObject)
    })
  }, [])

  return (
    <div className="App">
      <User userObject={user} />
    </div>
  )
}

export default App
