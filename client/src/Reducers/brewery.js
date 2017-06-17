const initalState = {
  breweryInfo: [],
}
const brewery = (state = initalState, action) => {
  switch (action.type){
    case 'BREWERY_DETAILS':
    return{
      ...state,
      breweryInfo: action.breweryInfo
    };
    default:
      return state;
  }
}
export default brewery;
