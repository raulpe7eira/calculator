import React, { Component } from 'react';
import PointTarget from 'react-point';
import './Key.css';

class Key extends Component {

  render() {
    const { onPress, className, ...props } = this.props

    return (
      <PointTarget onPoint={onPress}>
        <button className={`calculator-key ${className}`} {...props}/>
      </PointTarget>
    )
  }

}

export default Key;
