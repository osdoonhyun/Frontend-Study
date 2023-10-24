interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 사용
let odo: User = {
  name: 'odo',
  age: 12,
};

// 함수에 인터페이스 사용
function getUser(user: User): void {
  console.log(user);
}

getUser(odo);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunc {
  (a: number, b: number): number;
}

let sum: SumFunc;
sum = function (a: number, b: number): number {
  return a + b;
};

interface StringArr {
  [index: number]: string;
}

let arr: StringArr = ['a', 'b', 'c'];
arr[2];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  sth: /abc/,
};

Object.keys(obj).forEach((value) => {});

// 인터페이스 확장 extends
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  // name: string;
  // age: number;
  language: string;
}

let odos: Developer = {
  name: 'odo',
  age: 17,
  language: 'Korean',
};
