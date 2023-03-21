import React from 'react';
import ReactDOM from 'react-dom';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
class Widget extends React.Component {
  render() {
    return /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h1", {
        children: "My Widget"
      }), /*#__PURE__*/_jsx("p", {
        children: "This is my widget. It can be loaded on any website!"
      })]
    });
  }
}
ReactDOM.render( /*#__PURE__*/_jsx(Widget, {}), document.getElementById('widget-container'));
