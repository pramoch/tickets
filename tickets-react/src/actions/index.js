const matches =  [
  {
    id: '1',
    title: 'Arsenal vs Norwich City',
    stadium: 'Emirates Stadium'
  },
  {
    id: '2',
    title: 'West Ham United vs Chelsea',
    stadium: 'London Olympic Stadium'
  }
];

export const getMatches = () => {
  return (dispatch, getState) => {
    // const stateBefore = getState();

    dispatch({
      type: 'GET_MATCHES',
      payload: matches
    })
  }
}

export const getMatch = id => {
  return (dispatch) => {
    dispatch({
      type: 'GET_MATCH',
      payload: matches.find(value => value.id === id)
    })
  }
}