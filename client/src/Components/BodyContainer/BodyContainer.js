import React from 'react';
import Splash from '../Splash/Splash';
import List from '../List/List';
import { connect } from 'react-redux';

const BodyContainer = ({switchView}) => {
  return (
    <div>
      {switchView ? <List /> : <Splash /> }
    </div>
  )
};
const mapStateToProps = state => {
  console.log(state)
  return{
    switchView: state.search.show
  }
}
export default connect (mapStateToProps) (BodyContainer)
