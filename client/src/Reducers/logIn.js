const initalState = {
  loggedIn: false,
  user: {}
}

const logIn = (state = initalState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN':
    return{
      ...state,
      loggedIn: true,
      user: action.data.data.user
    }
    default:
      return state;
  }
}
export default logIn;
