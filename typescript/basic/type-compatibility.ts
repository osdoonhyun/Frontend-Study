// 타입 호환: 타입스크립트 코드에서 타입이 다른 타입에 잘 맞는지를 의미

interface Man {
  name: string;
}

class Human {
  name: string;
}

let i: Man;
i = new Human();
// 구조적 타이핑(structual typing)

// 타입 호환 - 함수, 제네릭
const add = (a: number) => {
  //
};

let summ = (a: number, b: number) => {
  // return a + b;
};

summ = add;
// add = summ;
