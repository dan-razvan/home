import User from './components/ui/User'
// import { User as UserModel } from './components/model/User'
import APIService from './services/APIService'
import { useEffect, useState } from 'react'

const App = () => {
  let [user, setUser] = useState(null)
  // let [{ route }] = useState({
  //   route: 'http://localhost:3001/api/user',
  //   method: 'GET',
  // })
  const api = new APIService({
    route: 'http://localhost:3001/api/user',
    method: 'GET',
  })
  console.log(api)

  useEffect(() => {
    console.log(api.options.route)
    APIService.getData(api.options.route).then((userObject) => {
      console.log(userObject)

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

// import User from './components/ui/User'
// import { User as UserModel } from './components/model/User'
// import { useEffect, useState } from 'react'

// const App = () => {
//   let [user, setUser] = useState(null)

//   useEffect(() => {
//     UserModel.get().then((userObject) => {
//       setUser(userObject)
//     })
//   }, [])

//   return (
//     <div className="App">
//       <User userObject={user} />
//     </div>
//   )
// }

// export default App
