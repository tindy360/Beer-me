const loadResults = brews =>({
  type: 'LOAD_RESULTS',
  brews
});

const addMapCord = cords =>({
  type: 'GET_LAT_LONG',
  cords
});

export const findBrews = getBrews => {
 return dispatch => {
   console.table(getBrews)//verified does return search string
   const url = `http://beermapping.com/webservice/loccity/5b97c8cf9273a05249af831b61d9df81/${getBrews}&s=json`;
   //add call to trigger a loading indicator
   fetch(url)
   .then(response => response.json())
   .then(json => dispatch(loadResults(json)))
 };
};

export const moreDetails = data => {
  return dispatch => {
    console.log(data.id);
    const url = `http://beermapping.com/webservice/locmap/5b97c8cf9273a05249af831b61d9df81/${data.id}&s=json`;
    fetch(url)
    .then(response => response.json())
    .then(json => dispatch(addMapCord(json)))
  };
};
