import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
    const text = 'hellooooooooooo';
    return (
      <Fragment>
        <h1>HELLO REACT!</h1>
        <h2>{text}</h2>
      </Fragment>
    );
  }
}

export default App;
