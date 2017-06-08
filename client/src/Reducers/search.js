const initalState = {
  searchResults: [],
  mapPoints: []
}

const search = (state = initalState, action) => {
  switch (action.type) {
    case 'LOAD_RESULTS':
    console.log(action.brews);
      return{
        ...state,
        searchResults: action.brews

      };
      default:
      return state;
  }
}

export default search;
