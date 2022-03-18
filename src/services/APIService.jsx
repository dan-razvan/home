import { Component } from 'react'

import { User } from '../components/model/User'

class APIService extends Component {
  constructor() {
    super()
  }
  static getData(options) {
    return fetch(options)
      .then((response) => response.json())
      .then(({ api: { nickname, avatar, lastOnline } }) => {
        return new User(nickname, avatar, lastOnline)
      })
  }
}

export default APIService
