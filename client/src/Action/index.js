const loadResults = brews =>({
  type: 'LOAD_RESULTS',
  brews
});
//http://beermapping.com/webservice/loccity/5b97c8cf9273a05249af831b61d9df81/tampa,fl &s=json

export const findBrews = (getBrews) => {
 return dispatch => {
   console.log(getBrews)//verified does return search string
   const url = `http://beermapping.com/webservice/loccity/5b97c8cf9273a05249af831b61d9df81/${getBrews}&s=json`;
   //add call to trigger a loading indicator
   fetch(url)
   .then(response => response.json())
   .then(json => dispatch(loadResults(json)))
 }
}
