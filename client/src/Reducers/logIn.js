const initalState = {
  loggedIn: false,
  user: {}
}

const logIn = (state = initalState, action) => {

  switch (action.type) {
    case 'UPDATE_LOGIN':
    return{
      ...state,
      user: action.data
    }
    default:
      return state;
  }
}
export default logIn;
