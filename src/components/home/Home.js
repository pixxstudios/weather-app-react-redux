import React from 'react';
import { Link } from 'react-router';
import Header from '../common/Header';

class Home extends React.Component {
  render(){
    return(
      <div>
      <Link className="btn btn-info" to="about">About</Link>
        <div className="jumbotron">
        <form class="form=group:">
          <input type="text" placeholder="city" className="form-control"/>
          <button type="button" className="btn btn-primary btn-block">Search</button>
          </form>
        </div>

      </div>
    );
  }
}

export default Home;
