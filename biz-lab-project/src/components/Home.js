import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-dark mr-4"><Link className='connectLink' to="/forms">FORMULAIRE</Link></button>
      </div>
    );
  }
}

export default Home;
