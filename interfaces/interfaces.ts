//Type alias
type Point = {
  x: number;
  y: number;
};

interface Person {
  readonly id: number;
  name: String;
  age: number;
  nickname?: string;
  greet: () => string;
}

const person1: Person = { id: 1, name: 'Peter', nickname: 'Pet', age: 20, greet: () => `Test` };
person1.age = 24;
// person1.id = 2;

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Apple',
  price: 1,
  applyDiscount: (discount: number) => {
    return 2;
  },
};

interface Dog {
  name: string;
}

interface Dog {
  bark(): string;
}

const jack: Dog = {
  name: 'Jack',
  bark() {
    return 'Wouff';
  },
};

interface ServiceDog extends Dog {
  job: string;
}

const elly: ServiceDog = {
  name: 'Elly',
  bark: () => 'Wuff',
  job: 'Bomb dog',
};

interface Car {
  readonly id: number;
  hs: number;
}

interface Supercar extends Car, Dog {
  speed: number;
}

const theBestCar: Supercar = {
  id: 1,
  speed: 360,
  hs: 400,
  name: 'The Best Car',
  bark: () => 'I cant bark!',
};

//Differences between interfaces and type aliases.
// With an interface you can only describe an object.
// We can extend interfaces
