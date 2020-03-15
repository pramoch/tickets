import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_MATCHES':
      return { ...state, ..._.mapKeys(action.payload, 'id')}
    case 'GET_MATCH':
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
};
