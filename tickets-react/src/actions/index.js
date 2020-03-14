export const getMatches = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_MATCHES',
      payload: [
        { title: 'Match 1'},
        { title: 'Match 2'}
      ]
    })
  }
}