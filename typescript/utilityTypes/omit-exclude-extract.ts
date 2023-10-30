type Exclude<T, U> = T extends U ? never : T;
type ExtractM<T, U> = T extends U ? T : never;

type Animal = 'Cat' | 'Dog' | 'Human';
type Mammal = Exclude<Animal, 'Human'>; //'Cat' | 'Dog'
type Human = Extract<Animal, 'Cat' | 'Dog'>; // 'Cat' | 'Dog'
