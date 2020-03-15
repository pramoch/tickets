export const getMatches = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_MATCHES',
      payload: [
        {
          id: '001',
          title: 'Arsenal vs Norwich City',
          stadium: 'Emirates Stadium'
        },
        {
          id: '002',
          title: 'West Ham United vs Chelsea',
          stadium: 'London Olympic Stadium'
        }
      ]
    })
  }
}