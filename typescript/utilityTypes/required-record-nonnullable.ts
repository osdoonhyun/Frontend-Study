// Required는 모든 타입을 필수로 만듦
interface Profile {
  name: string;
  age: number;
  married: boolean;
}

// ? : optional
// -? : modifier 기존에 옵셔널 기능 제거
type name = Profile['name'];

type R<T> = {
  [Key in keyof T]-?: T[Key];
};

const odoss: R<Profile> = {
  name: 'odos',
  age: 40,
  married: true,
};

// 읽기 전용(수정 X)
const odossReadonly: Readonly<Profile> = {
  name: 'odos',
  age: 40,
  married: true,
};

odossReadonly.age = 44; // error 발생

type R<T> = {
  readonly [Key in keyof T]: T[Key];
};

// record 객체를 표현하는 한 가지 방법
type R<T extends keyof any, S> = {
  [Key in T]: S;
};

const a: R<string, number> = { a: 3, b: 5, c: 7 };

// nonnullable null, undefined는 제외
type A = string | null | undefined | boolean | number;
type B = N<A>;

type N<T> = T extends null | undefined ? never : T;
