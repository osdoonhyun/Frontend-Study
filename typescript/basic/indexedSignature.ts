type AAA = { a: number; b: number; c: number; d: number; e: number };

const aaaa: AAA = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// indexed Signature
type BBB = { [key: string]: number };

const bbbb: BBB = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// maped types
type CCC = 'Human' | 'Mammal' | 'Animal';
type DDD = { [key in CCC]: number };
const EEE: DDD = { Human: 3, Mammal: 1, Animal: 7 };
