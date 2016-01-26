// requiring of text only works with proper module loader and thus not with mocha test
// export const message = require('./hello.html');
export const message = '<h1>Hello, World</h1>';

export function sayHello() {
  const mountNode: HTMLElement = <HTMLElement>document.querySelector('#mount');
  mountNode.innerHTML = message;
}
