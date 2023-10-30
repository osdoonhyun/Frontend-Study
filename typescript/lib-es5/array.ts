interface Array<T> {
  forEach(
    callbackFn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
  filter(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
}

// add<number>(1,2) // 제네릭에 타입을 넣어줌 : 타입파라미터
// <number>add(1,2) // 타입 강제 지정 as 역할

// const numArr: number[] = [1,2,3]
const numArr: Array<number> = [1, 2, 3];
numArr.forEach((value) => console.log(value)); // 1,2,3

const mapArr = [1, 2, 3].map((item) => item.toString()); // '1', '2', '3'

// const filteredArr = [1, 2, 3, 4].filter((value) => value % 2);
// const filteredArr = [1, '2', 3, '4', 5].filter(
//   (value) => typeof value === 'string'
// );
// ['2', '4'] string[] 이여야 하는데 (string | number)[] 잘못 추론됨
// 왜 제대로 추론하지 못하는지, 추론 잘하게 하려면 어떻게 해야 하는지
const predicated = (value: string | number): value is string =>
  typeof value === 'string';
const filteredArr = [1, '2', 3, '4', 5].filter(predicated);
