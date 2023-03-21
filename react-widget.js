import React from 'react';
import ReactDOM from 'react-dom';

class Widget extends React.Component {
  render() {
    return (
      <div>
        <h1>My Widget</h1>
        <p>This is my widget. It can be loaded on any website!</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Widget />,
  document.getElementById('widget-container')
);
