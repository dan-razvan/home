import { Component } from 'react'

import { User } from '../components/model/User'

class APIService extends Component {
  constructor() {
    super()
  }
  static getData(options) {
    return fetch(options)
      .then((response) => response.json())
      .then((data) => new User(data.nickname, data.avatar, data.lastOnline))
  }
}

export default APIService
