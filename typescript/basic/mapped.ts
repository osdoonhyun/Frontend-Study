// type AAAA = {'a': 1, 'b':2,'c':3...};
type AAAA = { [key in string]: number };

type AAAAType = { [key in AAAAKey]: number };
type AAAAKey = 'Human' | 'Mammal' | 'Animal';

const aaaaa: AAAAType = { Human: 123 };
