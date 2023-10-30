// Partial: 모든 키값을 옵셔널을 걸어준다.
interface Profile {
  name: string;
  age: number;
  married: boolean;
}

const iam: Profile = {
  name: 'odo',
  age: 40,
  married: false,
};

const newI: Partial<Profile> = {
  name: 'odo',
  age: 60,
};

// [Key: string]: string -> index signature
// [Key in keyof T]: string -> mapped Type
type P<T> = {
  [Key in keyof T]?: T[Key]; // name,age, married
};

// <Profile>
// {
//   name ?: string,
//   age?:number,
//   married?:boolean
// }
