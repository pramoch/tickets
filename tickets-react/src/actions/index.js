export const getMatches = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_MATCHES',
      payload: [
        {
          title: 'Arsenal vs Norwich City',
          stadium: 'Emirates Stadium'
        },
        {
          title: 'West Ham United vs Chelsea',
          stadium: 'London Olympic Stadium'
        }
      ]
    })
  }
}