// JS에서 변수, 매개변수, 리턴 값 3개만 Type 붙여놓으면 끝
const a: number = 5;
const b: string = 'S';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;
const h: any = true; // 다됨

function add1(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;

// type으로 타입을 선언하는 방식: 타입 에일리어스 (type alias)
type Add = (x: number, y: number) => number;
const add3: Add = (x, y) => x + y;

interface Add2 {
  (x: number, y: number): number;
}

const add4: Add2 = (x, y) => x + y;

// 객체
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// 배열 : <> -> 제내릭
const arr: string[] = ['123', '456'];
const arr2: Array<number> = [123, 456];

// 튜플 : 고정된 Array
const arr3: [number, number, string] = [123, 456, 'SSS'];

// 타입 자리에 고정된 원시값
const fff: 5 = 5;
const qqq: true = true;

const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === 'rejected';

const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

const promises = await Promise.allSettled([
  Promise.resolve('a'),
  Promise.resolve('b'),
]);
const errors = promises.filter(isRejected);

export {};
