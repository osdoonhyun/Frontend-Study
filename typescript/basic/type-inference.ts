// 타입 추론 기본
let abc = 'abc';

const getB = (b: 10) => {
  let hib = 'hib';
  return b + hib;
};

10 + '10'; // 1010

interface Dropdowning<T> {
  value: T;
  title: string;
}

let item: Dropdowning<string> = {
  value: 'product',
  title: 'Swings',
};

interface DetailDropdowning<U> extends Dropdowning<U> {
  description: string;
  tag: U;
}

let detailedItem: DetailDropdowning<number> = {
  title: 'kkk',
  value: 3,
  description: 'bbb',
  tag: 5,
};

// 타입 넓히기 - 타입추론
let num = 5; // let num: number
// 타입 추론 시 typescript가 상황을 고려하여 타입을 넓혀줌

// 타입 좁히기 - 타입가드
let str: string | number;
if (typeof str === 'string') {
  str.toString();
} // str의 타입을 좁혀줌
