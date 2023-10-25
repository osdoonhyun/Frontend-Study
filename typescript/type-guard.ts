// 타입의 범위를 구체화시켜 나가는

interface Developerr {
  name: string;
  skill: string;
}

interface Personn {
  name: string;
  age: number;
}

function introduce(): Developerr | Personn {
  return { name: 'Tony', age: 30, skill: 'TypeScript' };
}

let Ironman = introduce();
console.log(Ironman.skill);

if ((Ironman as Developerr).skill) {
  let skill = (Ironman as Developerr).skill;
  console.log(skill);
} else if ((Ironman as Person).age) {
  let age = (Ironman as Person).age;
  console.log(age);
}

// 타입 가드는 is패턴을 많이 쓴다.
// -> 해당 타입인지 확인 function is해당타입 (){}
function isDeveloperr(target: Developerr | Personn): target is Developerr {
  return (target as Developerr).skill !== undefined;
}

if (isDeveloperr(Ironman)) {
  console.log(Ironman.skill);
} else {
  console.log(Ironman.age);
}
