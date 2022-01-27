"use strict";

console.log("App.js is running");
// JSX - Javascript XML
// let template = <p> This is JSX </p>; isso é jsx
// let template = /*#__PURE__*/React.createElement("p", null, " This is JSX ");

var appObject = {
    title: "Indecision App!",
    subTitle: "Put your life in the hands of a computer"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appObject.title
    ),
    React.createElement(
        "p",
        null,
        appObject.subTitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "item 2"
        )
    )
);

var usuario = {
    name: "Vitor",
    age: 27,
    location: "Campinas"

    // let name = 'Mike'
    // let age = 20
    // let location = 'Santos'
    // undefined é útil pq não vai mostrar nada

};function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        usuario.name ? usuario.name : 'Anonymous'
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        usuario.age
    ),
    getLocation(usuario.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot); /*Dois argumentos: o primeiro o JSX que queremos renderizar, o segundo é o dom onde queremos */
