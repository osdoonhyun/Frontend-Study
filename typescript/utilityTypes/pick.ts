// Partial: 모든 키값을 옵셔널을 걸어준다.
interface Profile {
  name: string;
  age: number;
  married: boolean;
}

// const newIam: Omit<Profile, 'married'> = {
const newIam: Pick<Profile, 'name' | 'age'> = {
  name: 'me',
  age: 40,
};

// 제네릭에 제한 조건을 먼저 붙여줘야 한다
type P<T, S extends keyof T> = {
  [Key in S]: T[Key];
};
