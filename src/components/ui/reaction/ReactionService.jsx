const ReactionService = () => {
  return fetch('http://localhost:3001/api/reaction')
    .then((response) => response.json())
    .then((data) => data)
}

export default ReactionService
