const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I am h1 tag"))
);


// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc", className: "heading" },
//     "Namaste React"
// );
console.log(parent); // React Element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);