const person = {
  name: 'Peter',
  age: 16,
};

function sayHello(obj: { name: string; age: number }): string {
  return `Hello ${obj.name}`;
}

sayHello(person);
