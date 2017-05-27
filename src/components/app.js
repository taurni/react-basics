import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      value: '',
      textValue: '',
    };
  }

  textEntered = (event) => {
    this.setState({ value: event.target.value });
  };

  changeText = () => {
    this.setState({ textValue: this.state.value });
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        {this.state.textValue}<br />
        <Button name={"Search"} clicked={this.changeText} />
        <input type="text" value={this.state.value} onChange={this.textEntered} />
      </div>
    );
  }
}
