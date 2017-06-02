import React from 'react';
import ReactDOM from 'react-dom';
import AutoScalingText from './AutoScalingText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutoScalingText />, div);
});
