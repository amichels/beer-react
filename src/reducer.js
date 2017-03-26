const defaultState = {
  beers: []
}

export default function beer(state = defaultState, action) {
  switch(action.type) {
    case 'BEER_LOADED':
      return {...state, beers: action.beers};
    default:
      return state;
  }
}