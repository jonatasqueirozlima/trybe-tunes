import React, { Component } from 'react';
import Header from '../components/Header';
import './styles/NotFound.css';

class nameClass extends Component {
  render() {
    return (
      <>
        <Header />
        <main
          data-testid="page-not-found"
          className="notfound-screen animate__animated animate__lightSpeedInLeft"
        />
      </>
    );
  }
}

export default nameClass;
