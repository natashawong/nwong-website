import React from 'react';
import Header from './components/Header';

export default class App {
  constructor(props) {
    super(props);
    this.state = {
        offset: this.state.offset
    };
}

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}