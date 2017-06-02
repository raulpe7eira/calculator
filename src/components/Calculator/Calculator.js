import React, { Component } from 'react';
import Display from '../Display/Display';
import Key from '../Key/Key';
import './Calculator.css';

const operations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

class Calculator extends Component {

  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false
  };

  clearAll() {
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    })
  }

  clearDisplay() {
    this.setState({
      displayValue: '0'
    })
  }

  toggleSign() {
    const { displayValue } = this.state
    const newValue = parseFloat(displayValue) * -1

    this.setState({
      displayValue: String(newValue)
    })
  }

  inputPercent() {
    const { displayValue } = this.state
    const currentValue = parseFloat(displayValue)

    if (currentValue === 0) {
      return
    }

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100

    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2))
    })
  }

  inputDot() {
    const { displayValue } = this.state

    if (!(/\./).test(displayValue)) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    }
  }

  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }

  performOperation(nextOperator) {
    const { value, displayValue, operator } = this.state
    const inputValue = parseFloat(displayValue)

    if (value == null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const newValue = operations[operator](currentValue, inputValue)

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      })
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }

  render() {
    const { displayValue } = this.state

    const clearDisplay = displayValue !== '0'
    const clearText = clearDisplay ? 'C' : 'AC'

    return (
      <div className="calculator">
        <Display value={displayValue} />
        <div className="keypad">
          <div className="input-keys">
            <div className="function-keys">
              <Key className="key-clear" onPress={() => clearDisplay ? this.clearDisplay() : this.clearAll()}>{clearText}</Key>
              <Key className="key-sign" onPress={() => this.toggleSign()}>±</Key>
              <Key className="key-percent" onPress={() => this.inputPercent()}>%</Key>
            </div>
            <div className="digit-keys">
              <Key className="key-0" onPress={() => this.inputDigit(0)}>0</Key>
              <Key onPress={() => this.inputDot()}>,</Key>
              <Key className="key-1" onPress={() => this.inputDigit(1)}>1</Key>
              <Key className="key-2" onPress={() => this.inputDigit(2)}>2</Key>
              <Key className="key-3" onPress={() => this.inputDigit(3)}>3</Key>
              <Key className="key-4" onPress={() => this.inputDigit(4)}>4</Key>
              <Key className="key-5" onPress={() => this.inputDigit(5)}>5</Key>
              <Key className="key-6" onPress={() => this.inputDigit(6)}>6</Key>
              <Key className="key-7" onPress={() => this.inputDigit(7)}>7</Key>
              <Key className="key-8" onPress={() => this.inputDigit(8)}>8</Key>
              <Key className="key-9" onPress={() => this.inputDigit(9)}>9</Key>
            </div>
          </div>
          <div className="operator-keys">
            <Key className="key-divide" onPress={() => this.performOperation('/')}>÷</Key>
            <Key className="key-multiply" onPress={() => this.performOperation('*')}>×</Key>
            <Key className="key-subtract" onPress={() => this.performOperation('-')}>−</Key>
            <Key className="key-add" onPress={() => this.performOperation('+')}>+</Key>
            <Key className="key-equals" onPress={() => this.performOperation('=')}>=</Key>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;
