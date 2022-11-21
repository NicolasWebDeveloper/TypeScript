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

const testArr = [1, 2, 3, 4, 5];

testArr.reduce((acc, cur) => acc + cur);

const voidTest = (): void => {
  console.log('Hello World!');
  //   return 'Hello World!'; Void = no return
};

const testFunction = () => {
  return 1 * 1;
};

const testFunctionTwo = () => {
  1 * 1;
};

const neverTest = (): never => {
  while (true) {}
};

const neverTestTwo = (): never => {
  throw new Error('Test');
};
