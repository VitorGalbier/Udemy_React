console.log("App.js is running")
// JSX - Javascript XML
// let template = <p> This is JSX </p>; isso é jsx
// let template = /*#__PURE__*/React.createElement("p", null, " This is JSX ");

let appObject = {
    title: "Indecision App!",
    subTitle: "Put your life in the hands of a computer"
}

let template = (
    <div>
        <h1>{appObject.title}</h1> 
        <p>{appObject.subTitle}</p>
        <ol>
            <li>Item 1</li>
            <li>item 2</li>
        </ol>
    </div>);

let usuario = {
    name: "Vitor",
    age: 27,
    location: "Campinas"
}

// let name = 'Mike'
// let age = 20
// let location = 'Santos'
// undefined é útil pq não vai mostrar nada

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

let template2 = (
    <div>
        <h1>{usuario.name ? usuario.name : 'Anonymous'}</h1>
        <p>Age: {usuario.age}</p>
        {getLocation(usuario.location)}
    </div>
)

let appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot); /*Dois argumentos: o primeiro o JSX que queremos renderizar, o segundo é o dom onde queremos */