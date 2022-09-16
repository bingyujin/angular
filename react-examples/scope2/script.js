const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

const render = () => {
  jsContainer.innerHTML = `
    <div class="demo">
      Hello JS
      <input />
      <p>${new Date()}</p>
    </div>
  `;

  ReactDOM.render(
      React.createElement(
          "div",
          { className: "demo" },
          "Hello React ",
          React.createElement("input"),
          React.createElement(
              "p",
              null,
              new Date().toString()
          )
      ),
      reactContainer
  );
}

setInterval(render, 1000);

var aaa = [9, 7, 6];
var arr = () => aaa[0];

 // 1
console.log(arr());

function foo(n) {
    var f = () => aaa[0] + n; // foo's implicit arguments binding. arguments[0] is n
    return f();
}
console.log(foo(3));
 // 3 + 3 = 6

function foo1(n) {
    var f = (...args) => args[1] + n;

    return f(99,100);
}


console.log(foo1(3));