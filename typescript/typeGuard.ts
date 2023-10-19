function numOrStr(a: number | string) {
  // a.toFixed(1) // Error : a가 string일 가능성 있음
  if (typeof a === 'number') {
    a.toFixed(1);
  } else {
    a.charAt(3);
  }
}

numOrStr('123');
numOrStr(1);

function numOrArr(a: number | number[]) {
  if (Array.isArray(a)) {
    // number[]
    a.concat(4);
  } else {
    // number
    a.toFixed(3);
  }
}

numOrArr(123);
numOrArr([1, 2, 3]);

// Custom TypeGuard
// if문 안에 써서 TypeScript한테 정확한 타입이 뭔지 알려줌
interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
function catOrDog(a: Cat | Dog): a is Dog {
  // 타입 판별을 직접 만들기
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}

// 타입을 구분해주는 커스텀 함수를 직접 만들기
function pet(a: Cat | Dog) {
  if (catOrDog(a)) {
    console.log(a.bow);
  }

  if ('meow' in a) {
    console.log(a.meow);
  }
}

// 타입스크립트가 타입 추론을 잘못할 경우, 커스텀하게 타입 가드를 통해 정확한 타입을 추론하도록 함.
const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => {
  return input.status === 'rejected';
};

const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => {
  return input.status === 'fulfilled';
};

const promises = await Promise.allSettled([
  Promise.resolve('a'),
  Promise.resolve('b'),
]);
const errors = promises.filter(isRejected);

export {};
