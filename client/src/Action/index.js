import axios from 'axios'

const loadResults = brews => ({
    type: 'LOAD_RESULTS',
    brews
});

const breweryDetails = info => ({
    type: 'BREWERY_DETAILS',
    info
});

const addAddress = breweryData => ({
    type: 'ADD_ADDRESS',
    breweryData
});



export const renderList = () => ({
  type:'SHOW_LIST'
})

export const findBrews = getBrews => {
    return dispatch => {
        console.table(getBrews); //verified does return search string
        const url = `http://beermapping.com/webservice/loccity/5b97c8cf9273a05249af831b61d9df81/${getBrews}&s=json`;
        //add call to trigger a loading indicator
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(loadResults(json)));
    };
};

export const moreDetails = data => {
    return dispatch => {
        console.log(data);
        dispatch(addAddress(data))
        const url = `http://beermapping.com/webservice/locmap/5b97c8cf9273a05249af831b61d9df81/${data.id}&s=json`;
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(breweryDetails(json)))

    };
};
//axios request for validation
export const logInUser = login => {
  return (dispatch) => {
    axios.get('/api/users/',{
     auth: {
       username: login.user,
       password: login.password
     }
   })
   .then(response => response)
   .then(json => {console.log(json.data.user)})//dipatch action to add user object to store
  }
}// end request
