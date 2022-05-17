import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container } from './Container';

export class App extends Component {
  state = {};

  render() {
    Notify.info('Notify works');
    return <Container>fhfdhfgjhfg</Container>;
  }
}
