// unknown : 나중에 타입 타이핑을 해줘야함
// any : TypeScript를 포기

try {
} catch (error) {
  (error as Error).message; // TypeScript에서 제공하는 기본 에러 타입 Error
}

// undefined는 void에 대입 가능하다.
// null은 void에 대입 안된다.
function aaa(): void {
  return undefined; // return null은 안됨
}
