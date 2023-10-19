class A {
  a: string;
  b: number;
  constructor(a: string, b: number = 123) {
    this.a = '123';
    this.b = 123;
  }

  method() {}
}

const a = new A('123');

// 클래스 이름은 그 자체로 타입이 될 수 있다.
// 클래스 자체의 타입은 typeof A 이고 클래스의 이름은 instance를 가리킨다
const b: typeof A = A;

// private
class B {
  private a: string = '123'; // typescript의 private
  #b: number = 123; // javascript의 private, protected가 안된다.

  method() {
    console.log(this.a, this.#b);
  }
}

interface AA {
  readonly a: string;
  b: string;
}

// class는 interface를 implements 가능 (인터페이스가 있으면 클래스는 인터페이스를 따라야한다.)

// protected vs private
// class BB implements AA {
//   private a: string;
//   protected b: string;
// }

// private는 상속한 애들까진 접근할 수 있다.
// class CC extends BB {}
// new CC().a;
// new CC().b;
