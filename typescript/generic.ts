// generic: 함수의 파라미터
interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  map<U>(
    callbackFn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];

  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
}

[1, 2, 3].forEach((value, index) => {
  console.log(value, index + 1); // 1,1 2,2 3,3
});

[1, 2, 3].map((value) => {
  value.toString();
}); // ['1', '2', '3'] string[]

// 함수가 여러 가지 방법으로 사용되는 경우, 타입이 여러 번 선언되어 있을 수 있다.
const predicate = (value: string | number): value is string =>
  typeof value === 'string';
const filtered = [1, '2', 3, '4', 5].filter(predicate); //['2','4'] string[]

// 함수를 호출할 때 파라미터(인자)에 대한 타입을 뭔지 같이 지정하겠다.
function logText(text: string | number | boolean) {
  console.log('Text', text);
  return text;
} // 타입 추론됨.

function consoleLogText<T>(text: T): T {
  console.log('ConsoleLogText', text);
  return text;
}

consoleLogText<string>('kkk');

function addT<T extends number>(x: T, y: T): T {
  return (x + y) as T;
}

addT(1, 2);
// const addF = <T = unknown>(x: T, y: T) => {
const addF = <T extends unknown>(x: T, y: T) => {
  return { x, y };
};
