const initalState = {
  searchResults: [],
}

const search = (state = initalState, action) => {
  switch (action.type) {
    case 'LOAD_RESULTS':
    console.table(action.brews);
      return{
        ...state,
        searchResults: action.brews

      };
      default:
      return state;
  }
}

export default search;
