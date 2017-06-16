import React, {Component} from 'react';
import './Breweries.css';
import { connect } from 'react-redux';
import { moreDetails } from '../../Action'

class Breweries extends Component {
  componentDidMount(getBreweryInfo, brewery) {

    getBreweryInfo(brewery);
  }
  render(){
    return (
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    brewery: props.match.params.brewery
  }
};
const mapDispatchToProps = dispatch => {
  return{
    getBreweryInfo: (Id) => dispatch(moreDetails)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Breweries);
