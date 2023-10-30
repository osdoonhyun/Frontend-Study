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
