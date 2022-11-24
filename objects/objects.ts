const person = {
  name: 'Peter',
  age: 16,
};

function sayHello(obj: { name: string; age: number }): string {
  return `Hello ${obj.name}`;
}

sayHello({ name: 'Kevin', age: 20 });

sayHello(person);

let coordinate: { x: number; y: number } = { x: 20, y: 20 };

function returnCoordinates(): { x: number; y: number } {
  return { x: 1, y: 1 };
}

function doublePoint(point: { x: number; y: number }): { x: number; y: number } {
  return { x: point.x ** 2, y: point.y ** 2 };
}

type Person = {
  name: string;
  age: number;
};

const test = (person: Person) => {
  return `${person.name} is ${person.age} years old`;
};

test({ name: 'Juergen', age: 45 });

const nestedObjTest = (obj: {
  title: string;
  name: string;
  job: {
    experienceLevel: number;
    jobName: string;
  };
}) => {
  return obj.job.jobName;
};

type songType = {
  title: string;
  artist: string;
  data: {
    streams: number;
    likes: number;
  };
};

const printSong = (song: songType) => {
  return console.table(song);
};

printSong({ title: 'SampleTitle', artist: 'SampleArtist', data: { streams: 20, likes: 100 } });

type Video = {
  likes?: number; //Optional
  readonly title: string;
};

const video: Video = {
  title: 'The best famous Video.',
};

// video.title = 'Abcde'; - Error because video.title is marked as read only

type Circle = {
  radius: number;
};

type Color = {
  color: string;
};

type ColoredCirle = Circle & Color;

const smiley: ColoredCirle = {
  radius: 1,
  color: 'yellow',
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const testCatDog: CatDog = {
  numLives: 1,
  breed: 'N/A',
  age: 5,
};
