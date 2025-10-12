// let ele=React.createElement("h1",{},"Hello world from react");
// let root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(ele);
// console.log(ele);

/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */

let ele=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},[React.createElement("h1",{},"This is h1 tag"),React.createElement("h2",{},"This is h2 tag")]),
    React.createElement("div",{id:"child2"},[React.createElement("h1",{},"This is h1 tag"),React.createElement("h2",{},"This is h2 tag")])]
)
let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);
