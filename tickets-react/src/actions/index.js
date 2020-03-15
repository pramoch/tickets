export const getMatches = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_MATCHES',
      payload: [
        {
          id: 1,
          title: 'Arsenal vs Norwich City',
          stadium: 'Emirates Stadium'
        },
        {
          id: 2,
          title: 'West Ham United vs Chelsea',
          stadium: 'London Olympic Stadium'
        }
      ]
    })
  }
}