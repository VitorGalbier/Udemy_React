"use strict";

console.log("App.js is running");
// JSX - Javascript XML
// let template = <p> This is JSX </p>; isso é jsx
// let template = /*#__PURE__*/React.createElement("p", null, " This is JSX ");
var template = React.createElement(
  "h1",
  null,
  "Indecision App!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot); /*Dois argumentos: o primeiro o JSX que queremos renderizar, o segundo é o dom onde queremos */
