import React from 'react';
import './List.css';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { moreDetails } from '../../Action';


const List = ({listItems, getDetails}) => (
  <div>
    <Table className='responsive bordered'  >
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {listItems.map((data, i) => (
          <tr key={data.id}><td>{<Link to={'/Breweries'} onClick={() => getDetails(data) }>{data.name}</Link>}</td><td>{data.status}</td><td>{data.url}</td></tr>
        ))}
      </tbody>
    </Table>
  </div>
);

const mapStateToProps = state =>({
  listItems: state.search.searchResults
})

const mapDispatchToProps = dispatch => ({
  getDetals: (data) => dispatch(moreDetails(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(List);
