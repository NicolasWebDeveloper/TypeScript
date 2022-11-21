function multiply(num: number) {
  return num * 2;
}

multiply(1);

function sayHello(name: string[]): string {
  return `Hello ${name.map(el => el + ',').join(' ')}`;
}

console.log(sayHello(['Peter', 'Thomas']));

function abc(num: number = 1): number {
  return num;
}

abc(1);

const arrowTest = (n: number): number => {
  return n ** n;
};

const secondArrowTest = (str: string): string => str;

const random = (str: string) => (Math.random() < 0.5 ? str : +str);
