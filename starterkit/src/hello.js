export const message = '<h1>Hello, beautiful World</h1>';

export function sayHello() {
  const div = document.createElement('div');
  div.setAttribute('id', 'main');
  div.innerHTML = message;
  document.body.appendChild(div);
}

