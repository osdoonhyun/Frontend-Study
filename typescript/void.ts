// void 종류
// 매개변수, 메서드의 void 의미 : 직접적으로 return 값을 사용하지 않겠다
// 함수의 void 의미 : 직접적으로 return 값이 없다.

// 매개변수의 void
function fff(callback: () => void) {}
// 매개변수가 void인 함수도 return 값이 존재해도 된다
fff(() => {
  return '3';
});

// 함수의 void (리턴 타입이 void)
function aa(): void {}
// 함수의 void에 리턴 값은 에러 발생
// aa() {
//   return '33'
// }

// 메서드의 void
interface Human {
  talk: () => void;
}
// 메서드의 void도 return 값이 있어도 된다.
const human: Human = {
  talk() {
    return '2';
  },
};

// 예제
// declare 사용하면 js시 사라짐, 함수도 선언 가능
// declare는 외부에서 만들어진 것을 Type 선언 시 사용
declare function forEach(arr: number[], callback: (el: number) => void): void;

// 매개변수에서 쓰이는 void는 실제 리턴 값이 뭐든 상관하지 않는다.
let target: number[] = [];
forEach([1, 2, 3], (el) => target.push(el));
