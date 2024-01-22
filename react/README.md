# React

## ❓React에서 key를 사용해야 하는 이유는 무엇이고, 어떤 데이터를 key로 사용해야 하나요?

리액트에서 배열 데이터를 렌더링 하는 경우가 많은데, 자식들이 key를 가지고 있다면 리액트는 key를 통해서 기존 트리와 업데이트 된 이후 트리의 자식들이 일치하는 것을 확인하는데, 이때 key 값을 인덱스 값으로 주고 나서 요소가 재배열 된다면 key값이 바뀌기 때문에 식별자의 역할을 하지 못한다.

배열 데이터 렌더링 이외에도 컴포넌트에 key 프로퍼티를 줄 수 있다. 예를 들어, 초기화 되어야 하는 상태를 처리할 때 key 값을 이용하면 현재 컴포넌트 인스턴스를 업데이트하지 않고 새로운 컴포넌트 인스턴스를 생성하여 컴포넌트가 초기화된 상태를 만들 수 있다.

### key 규칙

- key는 형제 요소에서 유일해야 한다.
- key는 변경 되어서 안되고, 렌더링 중에 key를 생성하면 안된다.

## ❓리액트 라이프 사이클은 무엇인가요

모든 리액트 컴포넌트에는 라이프사이클이 존재. 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비과정에서 시작하여 페이지에 사라질때 끝난다.
리액트 라이프사이클은 총세가지 카테고리를 가진다. 마운트, 업데이트, 언마운트

**마운트**  
DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트(mount)

**업데이트**

1. props가 바뀔 때

2. state가 바뀔 때

3. 부모 컴포넌트가 리렌더링될 때

4. this.forceUpdate로 강제로 렌더링을 트리거할 때

**언마운트**  
마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트(unmount)

## ❓ 렌더링과 마운팅의 차이에 대해 말씀해주세요

mount는 리액트가 처음으로 구성요소를 렌더링하고 실제로 초기 DOM을 빌드하는 것입니다. render는 DOM생성을 위해 함수가 호출될 때(혹은 클래스 기반 메서드가 호출될 때)입니다

## ❓ 코드 mount, unmount, update

```
useEffect(() => {}, [])
useEffect(() => {}, [a, b])
useEffect(() => {return () => {}}
```

해당 코드를 mount, unmount, update 관점에서 설명해주세요.

```
useEffect(() => {}, []) // ComponetDidMount
useEffect(() => {}, [a, b]) // ComponentDidUpdate
useEffect(() => {return () => {}}) // ComponentWillUnmount 컴포넌트가 언마운트 되기 직전에 실행됨
```

## ❓ setState는 비동기인가요?

setState의 역할은 컴포넌트의 state 객체를 업데이트하는 것이다. 리액트에서는 state가 변경되면 컴포넌트가 리렌더링된다.

setState 함수는 동기 함수이지만 setState 함수 호출은 비동기적으로 일어난다.
리액트의 setState가 동기 함수인데 마치 비동기 함수처럼 보이는 이유는 리액트의 리렌더링 원리가 가상 돔을 통해 비동기적으로 작동하기 때문이다.

## ❓ setState(num + 1) vs setState(num ⇒ num + 1)?

setState(num + 1): 이 방법은 현재 상태 값을 가져와서 그에 1을 더한 값을 설정합니다. 이는 상태가 비동기적으로 업데이트되는 경우 문제를 일으킬 수 있습니다. 여러 번 호출되면 예상치 못한 동작이 발생할 수 있습니다.

setState(num => num + 1): 이 방법은 이전 상태 값을 받아와서 함수를 통해 새로운 상태 값을 계산합니다. 이전 상태를 정확히 알 수 있기 때문에 비동기적 업데이트에서 발생하는 문제를 방지할 수 있습니다.

## ❓Hydration이 무엇인가요?

Hydration은 서버에서 렌더링 된 HTML에 이벤트 리스너 또는 상태를 부여해서 유저와 상호작용 할 수 있도록 만드는 과정입니다.

## ❓웹페이지의 성능 지표 중 Hydration과 연관될 수 있는 것은 무엇이 있을까요?

Hydration을 한다는 것은 SSR을 한다는 뜻이므로 SSR과 연관된 성능 지표들을 꼽을 수 있습니다.

- TTV(Time To View): 빠름
- FCP(First Contentful Paint): 빠름
- LCP(Largest Content Paint): 빠름
- TTI(Time To Interact): 느림
- FID(First Input Delay): 느림

## ❓Hydration을 최적화할 수 있는 방안은 무엇이 있을까요?

- Progressive Hydration
- Selective Hydration
