const initalState = {
  breweryInfo: [],
}
const brewery = (state = initalState, action) => {
  switch (action.type){
    case 'BREWERY_DETAILS':
    return{
      ...state,
      breweryInfo: action.info
    };
    default:
      return state;
  }
}
export default brewery;
