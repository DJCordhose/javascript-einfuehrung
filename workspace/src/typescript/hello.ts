export const message = '<h1>Hello, World</h1>';

export function sayHello() {
  const mountNode: HTMLElement = <HTMLElement>document.querySelector('#mount');
  mountNode.innerHTML = message;
}

