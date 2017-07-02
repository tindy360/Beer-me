const initalState = {
  breweryInfo: [],
  breweryAddress:{},
  lat: ''
}
const brewery = (state = initalState, action) => {
  switch (action.type){
    case 'BREWERY_DETAILS':
    return{
      ...state,
      breweryInfo: action.info[0]
    };
    case 'ADD_ADDRESS':
    return{
      ...state,
      breweryAddress: action.breweryData,

    }
    default:
      return state;
  }
}
export default brewery;
