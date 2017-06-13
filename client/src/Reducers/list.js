const initalState = {
  mapData: '',
}

const list = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_LAT_LONG':
      return {
        ...state,
        mapData:action.cords
      };
      default:
        return state;
  }
};
export default list;
