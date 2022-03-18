//model/User module
//acest modul raspunde de modul in care este structurata informatia despre user
// Roluri:
// * data structure
// * communication

class User {
  constructor(nickname, avatar, lastOnline) {
    this.nickname = nickname
    this.avatar = avatar
    this.lastOnline = lastOnline
  }
  //dynamic / non-static
  static get() {
    return fetch('http://localhost:3001/api/user')
      .then((response) => response.json())
      .then((data) => new User(data.nickname, data.avatar, data.lastOnline))
  }
}

//functional solution
// const getUser = (cb) => {
//   fetch('/data/user.json')
//     .then((response) => response.json())
//     .then((data) => {
//       cb(new User(data.nickname, data.avatar, data.lastOnline))
//     })
// }

export { User /*, getUser*/ }
