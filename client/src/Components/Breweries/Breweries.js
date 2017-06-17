import React, {Component} from 'react';
import './Breweries.css';
import { connect } from 'react-redux';
import { moreDetails } from '../../Action';

class Breweries extends Component {
  componentDidMount() {
    console.log(this.props.brewery);
    this.props.getDetails
  }
  render(){
    return (
      <div>
        <ul>
          <li>{this.props.brewery}</li>
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
const mapDispatchToProps = dispatch => ({
  getDetails: (props) => dispatch(moreDetails(this.props.brewery))
})
export default connect(mapStateToProps)(Breweries);
