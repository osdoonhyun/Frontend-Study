function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

// 함수 제안두기 : extends (...args: any) => any
// infer가 typescript가 알아서 추론하는 것, extends에서만 사용가능
type P<T extends (...args: any) => any> = T extends (...args: infer A) => any
  ? A
  : never;
type R<T extends (...args: any) => any> = T extends (...args: any) => infer A
  ? A
  : never;

type Params = Parameters<typeof zip>;
type Return = ReturnType<typeof zip>;
type First = Params[2];

// 함수의 매개변수의 타입들을 가져오기 위해 T를 가져와야 하고 이것은 함수여야 한다.
// 1. T를 함수로 제한한다. <T extends (...args: any) => any>
// 2. infer는 extends에서만 사용 = T extends (...args: infer A) => any ? A : never
// infer는 typescript가 알아서 매개변수를 추론하라는 것.
// 추론한 값이 있으면 쓰고 없으면 쓰지 마라
