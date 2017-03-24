const defaultState = {
  beer: []
}

export default function beer(state = defaultState, action) {
  switch(action.type) {
    case 'BEER_LOADED':
      return {...state, beer: action.beer};
    default:
      return state;
  }
}