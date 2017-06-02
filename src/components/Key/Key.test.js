import React from 'react';
import ReactDOM from 'react-dom';
import Key from './Key';

it('renders without crashing', () => {
  const button = document.createElement('button');
  ReactDOM.render(<Key />, button);
});

// TODO: test more scenarios.
