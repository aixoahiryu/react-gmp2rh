import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

class ShoppingList extends React.Component {
  render() {
    return (
      React.createElement("div", {
        className: "shopping-list"
      },
      React.createElement("h1", null, "Shopping List for "),
      React.createElement("ul",null,
        React.createElement("li", null, "Instagram"),
        React.createElement("li", null, "WhatsApp"),
        React.createElement("li", null, "Oculus")))
    );
  }
}

render(<App />, document.getElementById('root'));
render(<ShoppingList />, document.getElementById('shopping'));