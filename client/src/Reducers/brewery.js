const initalState = {
  breweryInfo: [],
  breweryAddress:{}
}
const brewery = (state = initalState, action) => {
  switch (action.type){
    case 'BREWERY_DETAILS':
    return{
      ...state,
      breweryInfo: action.info
    };
    case 'ADD_ADDRESS':
    return{
      ...state,
      breweryAddress: action.breweryData
    }
    default:
      return state;
  }
}
export default brewery;
