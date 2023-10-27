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
