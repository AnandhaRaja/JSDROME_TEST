import React from 'react';
import { render } from 'react-dom';

if(module.hot) module.hot.accept();

class App extends React.Component {
  state = {
    count: 0,
  };

  multiply = () => {
    let currentCount = this.state.count;

    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentCount * 2,
    });
  };
  divider = () => {
    let currentCount = this.state.count;

    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentCount / 2,
    });
  };
  resetss = () => {

    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count:  0,
    });
  };

  render() {
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.multiply}>*</button>
      <button onClick={this.divider}>/</button>
      <button onClick={this.resetss}>Reset</button>
    </div>
  }
}

render(<App />, document.getElementById('root'));