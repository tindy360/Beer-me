const initalState = {
  searchResults: [],
  show: false
}

const search = (state = initalState, action) => {
  switch (action.type) {
    case 'LOAD_RESULTS':
    console.table(action.brews);
      return{
        ...state,
        searchResults: action.brews

      };
      case 'SHOW_LIST':
        return{
          ...state,
          show: true
        }
      default:
      return state;
  }
}

export default search;
