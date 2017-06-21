import React from 'react';
import './List.css';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { moreDetails } from '../../Action'

const List = ({listItems, getCords }) => (
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
          <tr key={data.id}><td>{<Link to={`/brewery/${data.id}`}>{data.name}</Link>}</td>
            <td>{data.status}</td>
            <td>{data.url}</td>
            <td><Button id={data.id} onClick={()=> getCords(data.id)}>More Info</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

const mapStateToProps = state =>({
  listItems: state.search.searchResults
});
const mapDispatchToProps = dispatch =>({
  getCords: (reqId) => dispatch(moreDetails(reqId))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
