let age: number | string | boolean = 16; // Number OR String
age = 'sixteen';
age = true;
// age = {} - ERROR

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lng: number;
};

const position: Point | Loc = { lat: 1, lng: 1 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old!`);
}

function calcTax(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = Number(price);
  }
  return price * tax;
}

const nums: number[] = [1, 2, 3, 4, 5];

const stuff: (number | string)[] = [1, 2, 3, 4, 'a'];
const alternative: number[] | string[] = [1, 2, 3, 4];

const one: 1 = 1; //Literal type

let mood: 'Happy' | 'Very Happy' = 'Happy';
mood = 'Very Happy';
