# JavaScript

## ❓데이터 타입에 대해 설명해 주세요.

데이터 타입은 크게 메모리 상에서 저장되는 형태에 따라 기본형(Primitive) 타입과 참조형(Reference) 타입으로 나눠서 설명할 수 있다. 기본형에는 Number, String, Boolean, null, undefined, Symbol이 있고 참조형에는 대표적으로 객체가 있고 그 하위에 배열, 함수, 정규표현식, Set, Map 등이 있다.

## ❓위에서 말한 기본형과 참조형 데이터 타입에 차이점에 대해 설명해 주세요.

기본형 데이터와 참조형 데이터의 차이는 메모리 상에서 저장되는 형태에 따라 나뉘는데, 기본형의 데이터 저장 방식은 변수를 선언하고 주소를 할당하는 방식이다.
참조형은 변수를 선언하고 할당하고 나아가서 객체 안에 있는 프로퍼티를 모두 할당시킨다.

## ❓주소를 할당시키는 이유가 있는가?

데이터 할당시에 값을 직접 저장할 수 있고 값이 있는 주소를 할당시키는 방법으로 나눠서 설명할 수 있다. 둘의 장단점이 있는데, 데이터 할당시 값을 직접 저장하면 빠르지만, 값을 비교할 때 비용이 많이 들고 값이 길어지면 메모리 낭비가 심하다. 그러나 값의 주소를 저장하고 주소를 할당하면, 데이터 할당시에는 느리지만, 비교에 비용이 들지 않고 메모리 낭비를 최소화할 수 있다.

이렇게 데이터를 저장할 때 같은 값이 전체 메모리 공간 상에 오직 하나만 존재하게 되는데, 이것이 곧 불변값임을 의미한다. 그렇기 때문에 기본형 데이터에 대해서는 불변값이라 하며, 기본형 값과 참조형 값을 재할당할 경우 차이가 발생한다.
기본형 값을 바꿨을 때는 값이 바로 바뀌는 반면, 참조형을 바꿀 때는 주소를 할당하였기에 여전히 똑같은 객체를 바라본다. 객체를 복사하고 복사한 객체 값을 바꾸는데 원본 객체의 값이 같이 바뀌는 문제가 생기고 이를 해결하기 위해 매번 새로운 객체를 만들고 불변 객체가 등장하게 된 것이다.

## ❓가비지 컬렉팅에 대해 설명해 주세요.

C언어와 같은 Low-level 언어에서는 free() 함수를 통해 메모리 해제를 하지만, 자바스크립트의 경우는 메모리가 필요하지 않을 때 자동으로 해제하는데 이때 자동으로 해주는 게 가비지 컬렉터이다.

이후엔, 필요하지 않다는 기준과 어떤 원리로 가비지 컬렉션이 동작하는지에 대해, 어떤 알고리즘을 써서 메모리를 해제하는지에 대해 설명드릴 수 있습니다.

참조가 되지 않는 객체의 수인, 참조 카운트가 0이 되면 가비지 컬렉터의 수집 대상이 되어 메모리가 해제된다.

→ 이것은 순환 참조라는 문제가 있어서 이를 보완하기 위해 Mark and Sweep 방식이 나왔다. 루트에서 객체가 다른 코드에서 참조 가능한지 여부에 따라 객체의 "도달성"을 판단하여 도달 가능한 객체를 표시하고 도달 불가능한 객체를 수거하는 방식이다.

## ❓자바스크립트 객체의 속성에 대해 설명해 주세요.(writable, enumerable, configurable)

`Object.getOwnPropertyDescriptor(obj, prop);` 를 통해 객체 속성에 대한 정보를 확인할 수 있는데, 이때 객체와 객체의 속성을 인자로 넣어주면, value를 제외한 총 3개의 속성 설명을 확인할 수 있다. 3개 모두 true를 기본값으로 갖는다. `Object.defineProperty()` 를 통해 속성 설명자를 변경할수 있다.

1. writable 속성 : 해당 값을 수정할 수 있는지 여부를 나타내고 false로 설정하면
2. enumberable : 해당 객체의 속성 열거가 가능한 경우 true이고 이는 for… in Object.key() 메서드 등을 사용하여 객체 속성을 열가할 때 사용된다.
3. configurable : 해당 속성은 설정을 변경할 수 있는지 여부를 나타낸다. configurable을 false로 설정하면 설정을 변경할 수 없다.

위 3개의 객체 속성 writable, configurable, enumerable을 통해 객체의 동작을 제어할 수 있다.

## ❓ 클로져에 대해 설명해 주세요.

클로져는 본인의 상위 스코프에서 현재 참조하고 있는 식별자만을 기억한다. 이렇게 클로져에 의해 참조된 변수를 자유 변수라고 한다.

위에서 inner 함수도 outer 함수 내부에 있는 x를 참조했듯이, 클료져는 닫혀있다. 라는 의미의 클로져는 함수 본인이 기억하고 있는 자유 변수에 의해 갇혀있다. 닫혀있다. closed 되어있다는 의미다.

이 클로져는 **하나의 state가 의도치 않게 변경되지 않도록 state를 안전하게 은닉하고 또는 특정 함수에게만 state 변경을 허용하기 위해 사용된다.**

## ❓ 실행 컨텍스트에 대해 설명해 주세요.

코드를 **실행**하는데 필요한 **환경**을 제공하는 객체

- 환경 : 코드 실행에 영향을 주는 조건이나 상태
  → 코드를 실행하는데 필요한 조건이나 상태를 모아둔 객체가 바로 실행 컨텍스트이다.

실행컨텍스트는 식별자 결정에 있어서 효율적으로 해주는 수단으로서 필요한 정보를 한데 모아 제공하는 객체

실행 컨텍스트를 “코드 실행에 필요한 환경을 제공하는 객체”로 정리했고 보다 효율적인 식별자 결정을 위해 필요하다

## ❓ 자바스크립트 객체의 속성에 대해 설명해 주세요.(writable, enumerable, configurable)

`Object.getOwnPropertyDescriptor(obj, prop);` 를 통해 객체 속성에 대한 정보를 확인할 수 있는데, 이때 객체와 객체의 속성을 인자로 넣어주면, value를 제외한 총 3개의 속성 설명을 확인할 수 있다. 3개 모두 true를 기본값으로 갖는다. `Object.defineProperty()` 를 통해 속성 설명자를 변경할수 있다.

1. writable 속성 : 해당 값을 수정할 수 있는지 여부를 나타내고 false로 설정하면
2. enumberable : 해당 객체의 속성 열거가 가능한 경우 true이고 이는 for… in Object.key() 메서드 등을 사용하여 객체 속성을 열가할 때 사용된다.
3. configurable : 해당 속성은 설정을 변경할 수 있는지 여부를 나타낸다. configurable을 false로 설정하면 설정을 변경할 수 없다.

위 3개의 객체 속성 writable, configurable, enumerable을 통해 객체의 동작을 제어할 수 있다.

freeze : 값을 변경하고 추가 제거하는 것을 방지하고 싶을 때 사용

**`Object.freeze()`**를 사용하면 속성의 **`writable`**, **`enumerable`**, **`configurable`** 속성이 모두 **`false`**로 설정됩니다.

seal : 변경은 상관없고 값을 추가, 제거만 방지일 때 사용

**`Object.seal()`**을 사용하면 속성의 **`writable`**은 **`true`**로 설정되지만, **`enumerable`**와 **`configurable`**는 **`false`**로 설정됩니다.

구체적으로 object의 원리에 대해서는 공부해보지 않았지만 유추해보자면, 객체 속성을 설정 값을 변경해줌으로써 객체를 잠글 수 있지 않을까 생각됩니다.

## ❓ 이벤트 루프에 대해 설명해 주세요.

자바스크립트 **엔진**은 자바스크립트 코드를 해석하고 실행하는 인터프리터이다. (각 브라우저마다 엔진의 종류는 다르다. 사파리는 Webkit, 크롬은 V8)

<aside>
💡 **인터프리터란?**
소스 코드를 한 줄씩 읽어서 바로 실행하는 프로그램 또는 환경을 가리킵니다. 이는 컴파일러와 대비되는 개념입니다.
****자바스크립트는 주로 "스크립트 언어"로 분류됩니다. 스크립트 언어는 인터프리터(Interpreter)에 의해 한 줄씩 실행되며, 일반적으로 컴파일 단계가 없이 실행됩니다.

</aside>

자바스크립트 엔진은 크게 힙과 호출 스택(Call Stack)으로 구분이 된다.

힙 : 메모리 할당이 일어나는 부분으로 변수나 객체들이 저장되는 창고

호출 스택 : 함수가 호출되는 순서대로 쌓이는 스택 (정확히 말하면 함수가 아닌 함수의 실행 컨텍스트가 쌓이는 것)

자바스크립트는 싱글스레드 언어이다.

→ 호출 스택을 하나만 사용한다.

→ 동시에 하나의 일만 처리할 수 있다.

그럼에도 불구하고 비동기처리, 동시성에 대한 처리는 어떻게 하는 것일까?

웹 브라우저는 자바스크립트 엔진 말고도 Web API, 이벤트루프, Callback Queue를 가지고 있다.

setTimeout을 포함하여 DOM 메서드, HTTP 요청과 같은 Ajax 요청 등은 모두 자바스크립트 엔진 밖에 있는 Web API에서 제공하는 메서드들이다. WebAPI 메서드들은 작동을 마치면 비동기 메서들이기 때문에 콜백함수를 Callback Queue에 집어 넣는다. 거기서 콜백함수들이 실행을 대기하게 된다. Callback Queue는 다른 말로 **테스크큐(Task Queue)** 라고 한다.

→ 자바스크립트 엔진 자체는 싱글스레드이지만, 자바스크립트가 구동되는 환경인 웹 브라우저에는 Web API가 멀티스레드로 동작하여 여러 개의 스레드가 사용된다. 동작이 다 끝나면 Task Queue에 콜백함수를 넣어준다. 그리고 자바스크립트 엔진과 이것들이 상호 연동을 하기 위해서 필요한 장치가 Callback Queue와 Event Loop다

setTimeout는 Web API에서 실행이 되고 콜백함수를 가지고 있는 타이머를 WebAPI에서 생성하고 setTimout의 역할은 끝이 나고 return 한다. Web API에서 실행 중인 타이머가 있을 때, 정해진 시간이 지나고 나면 타이머 객체는 콜백 함수를 Callback Queue에 넣고 사라진다. 그리고 Callback Queue에서 실행되기를 기다린다. 콜백함수도 함수이기 때문에 실행되려면 호출 스택인 Call Stack에 들어가야 한다. 이때 Event Loop가 동작하게 된다.

### Event Loop

- 호출 스택과 콜백 큐를 계속 주시한다.
- **호출 스택이 비어있으면**, 먼저 들어온 순서대로 콜백 큐에 있는 콜백 함수들을 호출 스택으로 집어 넣는다.

### Callback Queue

**Callback** **Queue에 대해서 설명해 주세요.**

```jsx
console.log('시작');

setTimeout(function () {
  console.log('중간');
}, 0);

Promise.resolve().then(function () {
  console.log('promise');
});

console.log('끝');
// 시작 끝 promise 중간
```

MacroTaskQueue

- setTimeout, setInterval, Event Dispatch, networking response …
- 이벤트 루프는 MacroTaskQueue에 있는 task를 하나만 빼서 실행하고 다음 루프로 넘어간다.

MicroTaskQueue

- 어떤 일이 끝나고 처리되어야 할 일들이 다음 루프로 미뤄지는게 아니라 한번에 처리하기 위해 탄생했다. 이 Queue에 있는 MicroTask를 처리할 때는 다른 코드들이 끼지 않는다.
- Promise, MutationObserver 핸들러
- 이벤트 루프는 MicroTaskQueue가 빌때까지 task를 처리한다. 태스크 처리 중에 MicroTask가 들어와도 다음 루프로 미루지 않고 끝까지 처리한다(무한 루프 조심)
- JSEngine의 Call Stack이 비자마자 MicroTaskQueue가 가장 먼저 처리된다.
  즉 우선순위가 높다.

AnimationFrameQueue

- RequestAnimationFrame으로 등록한 콜백함수들이 이 Queue에 들어간다.
- Repaint 직전에 Queue에 있는 태스크들 전부 처리한다.
- Animation에 사용하면 frame drop을 최소화 할 수 있다.

## ❓Promise에 대해 설명해 주세요.

**Promise를 사용하는 이유**

1. 비동기적인 작업을 처리할 때, 작업이 성공했는지 실패했는지를 표준화된 방식을 이용해서 처리할 수 있도록 해준다.
2. 성공하면 then으로 전달된 함수가 실행되고, 실패하면 catch로 전달된 함수가 실행된다.

**Promise 상태**

pending : promise가 만들어져서 지정한 operation을 수행 중일 때는 pending 상태

fulfilled : operation을 성공적으로 끝내게 되면 filfilled 상태가 된다.

rejected : operation시 문제가 생긴다면 rejected 상태가 된다.

`new Promise()` 는 executor라는 콜백함수를 받는데, executor 콜백함수는 또 다른 두 가지의 콜백함수를 받는다.

resolve : 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달함

reject : 기능을 수행하다가 중간에 문제가 생기면 호출하게 될 함수

또한 executor 함수는 생성되자마자 실행이 된다. → promise는 비동기 함수이다 (X)

then, catch, finally

**Promise chaining**

then은 똑같은 promise를 리턴하기 때문에, 그 리턴된 promise에 catch를 다시 호출할 수 있다. 이를 통해 비동기적인 동작들을 묶어서 처리할 수 있다.

**Error Handling**

promise의 경우 네트워크 처리를 하는데, 네트워크에서 데이터를 받아오는 경우 시간이 걸리는데, 이러한 작업을 synchronous 동기적으로 처리하게 되면 그 시간 동안 다음 라인의 코드가 실행되지 못하기 때문에 비동기적으로 처리한다.

### promise.all , promise.race

`Promise.all` : 비동기 작업에서 가장 늦게 끝나는 작업을 기준으로 그 다음에 실행되는 방식으로 then의 파라미터는 각각의 promise에 실행 결과를 담은 배열이 반환된다.
promise 배열을 전달하게 되면 모든 promise들이 병렬적으로 받을 때까지 모아준다.

`Promise.race` : 동시에 실행시켜놓고 제일 빨리 끝나는 작업 이외의 것들은 버리고 그 다음 작업을 실행한다. then의 첫번째 파라미터로 제일 먼저 끝난 작업에 대한 결과가 전달된다.
배열에 전달되 프로미스 중에서 어떤 것이든 상관없고 먼저 리턴되는 첫 번째 promise를 받아오고 싶다.

**비동기 처리할 때 어떻게 처리하시는지?**

async/await 말고 promise를 써야 한다면 언제 쓰면 좋을지?

**await의 병렬처리 → `async/await 대신 promise를 써야할 때`**

async/await라는 키워드를 통해 비동기작업을 동기적으로 코드를 작성하듯 자연스럽게 코드를 작성하는 것처럼 간편하게 쓸 수 있다는 장점이 있다.

연관이 없는 두 개 이상의 비동기처리가 순차적으로 진행되기 때문에 비효율적이다.

```jsx
function delay(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

async function getApple() {
  await delay(2000);
  return '사과';
}

async function getBanana() {
  await delay(1000);
  return '바나나';
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 해결 방법 1 : promise를 만드는 순간 바로 promise 안에 있는 코드 블럭이 실행된다.
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise; // 여기서 병렬적으로 실행됨.
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
```
