const element = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react world"
);

const reactElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hello from react h1"),
    React.createElement("h2", { id: "heading" }, "hello from react h2"),
  ])
);

console.log(reactElement);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(reactElement);
