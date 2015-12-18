exports.message = '<h1>Hello, World</h1>';
function sayHello() {
    var mountNode = document.querySelector('#mount');
    mountNode.innerHTML = exports.message;
}
exports.sayHello = sayHello;
