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

## ❓render와 commit 과정에 대해 설명해 주세요.

Life Cycle에서 컴포넌트 DOM 상태에 따라 마운트, 업데이트 언마운트(class 컴포넌트 경우)로 나뉘고 여기서 Render Phase와 Commit Phase로 단계가 나뉘어 있다.

**Render Phase**
VDOM을 재조정(reconciliation)하는 단계이다.

### 재조정(reconciliation)이란?

VDOM과 실제 DOM 사이의 변경 사항을 처리하고 화면을 업데이트 하는 과정을 말한다. VDOM은 fiber node로 구성된 Tree 형태로 current Tree, workInProgress Tree를 가진 두 개의 트리를 가진 **더블 버퍼링 구조** 이다.

current Tree
DOM에 mount된 정보들을 Fiber node로 표현한 것들로 구성된 Tree를 current Tree라 한다. current Tree는 ReactDOM.render에 인자로 <App />과 연결된 Root Node와 연결되어 있다. HTML element를 가지고 와서 Root를 만든다. 즉, current Tree는 실제 HTML 태그에 적용이 되어 있는 정보를 담고 있는 fiber node로 구성된 Tree이다.

workInProgress
workInProgress는 말그대로 작업중이라는 뜻으로 current Tree를 복제해서 만들어진다. 동일하게 fiber node로 구성되어 alternamte를 통해 current와 서로 참조하고 있다. alternate는 fiber node 객체 안에 alternate라는 key를 가지고 있고, key의 value 값으로 reference 참조가 담겨 있다는 의미이다.

render phase에서 작업인 추가, 수정, 삭제가 일어나는 fiber node tree이다.
작업이 끝나고 commit phase를 지나면 workInProgress는 다시 current Tree가 된다.

- Root Node에서 current로 연결되어 있는 것이 끊어지고 workInProgress로 연결된다.
- 그리고 나서 workInProgress는 current가 되고 이를 복제해서 새로운 workInProgress를 다시 만든다.

-> 이렇게 같은 정보를 가지고 있는 두 개의 트리 구조를 더블 버퍼링 구조라 한다.

이는 작업 중인 workInProgress Tree를 삭제하거나 순서를 조정해야 할 경우, 원본이 필요하고 이를 참조해야 하기 때문이다.

**Commit Phase**
재조정이 끝난 VDOM을 DOM에 적용하고 라이프사이클을 실행하는 단계이다.

- 일괄적으로 처리하기 위해 sync적으로 실행된다
- 리액트가 DOM을 다 조작한 다음 콜스택을 다 비워줘야 그 다음 브라우저가 조작이 끝난 DOM을 paint하기 위해 함수를 호출할 수 있다.
- 브라우저가 paint하기 위해서는 DOM 조작이 완료되어야 한다.

### VDOM 구조

Virtual DOM 구조에 대해서 fiber node로 구성된 Tree 형태이고 더블 버퍼링 구조를 가지고 있다. fiber node들이 부모-자식 관계에서 자식 node를 child로 참조하고 있고 부모 node를 return으로 참조하고 있다. 그리고 두 번째 자식은 부모가 참조하고 있지 않다. 부모는 첫 번째 자식만 참조하고 있고 두 번째 이후부터는 첫 번째 자식이 sibling이라는 키 값으로 객체의 reference를 참조하고 있다.

렌더링 : 컴포넌트로 호출한 다음 react element를 return 받았을때 Fiber node로 확장이 되어지고 fiber node가 VDOM에 반영되는 것까지를 렌더링이라 한다.

그 이후 VDOM에 반영이 된 다음에, DOM에 mount되고 mount 된 DOM을 브라우저가 paint하는 과정으로 이어진다.

## ❓ Strict mode에 대해 설명해 주세요.

`<StrictMode>`는 개발 중에 컴포넌트에서 일반적인 버그를 빠르게 찾을 수 있도록 합니다.

### 컴포넌트 이중 렌더링

순수하지 않은 렌더링으로 인해 발생하는 버그를 찾기 위해 컴포넌트가 추가로 다시 렌더링됩니다. React는 작성하는 모든 컴포넌트가 순수 함수라고 가정합니다. 이것은 React 컴포넌트는 항상 동일한 입력(props, state, context)에 대해 동일한 JSX를 반환해야 한다는 것을 의미합니다.

이 규칙을 위반하는 컴포넌트는 예기치 않게 동작하며 버그를 일으킵니다. `Strict Mode`는 실수로 작성된 순수하지 않은 코드를 찾아내기 위해 (순수 함수여야 하는) 몇 가지 함수를 `개발 환경에서 두 번 호출`합니다.

- 컴포넌트 함수 본문 (이벤트 핸들러 내부 코드를 포함하지 않도록 최상위 로직에서만)
- `useState`, `set` 함수, `useMemo`, `useReducer`에 전달한 함수
- `constructor`, `render`, `shouldComponentUpdate`와 같은 일부 클래스 컴포넌트 메소드

함수가 순수한 경우 두 번 실행하여도 동작이 변경되지 않습니다. 순수 함수는 항상 같은 결과를 생성하기 때문입니다. 그러나 함수가 순수하지 않다면 (예: 받은 데이터를 변경하는 함수) 두 번 실행 시 보통 알아챌 수 있습니다. (이것이 순수하지 않은 이유입니다!) 이는 버그를 조기에 발견하고 수정하는 데 도움이 됩니다.

### Effect 다시 실행

Effect 클린업이 누락되어 발생하는 버그를 찾기 위해 컴포넌트가 추가로 Effect를 다시 실행합니다. 모든 Effect에는 몇 가지 셋업 코드가 있고 어쩌면 클린업 코드가 있을 수 있습니다. 일반적으로 React는 컴포넌트가 `마운트`(화면에 추가)될 때 셋업을 호출하고 컴포넌트가 `언마운트`(화면에서 제거)될 때 클린업을 호출합니다. 그런 다음 React는 마지막 렌더링 이후로부터 의존성이 변경된 경우 클린업과 셋업을 다시 호출합니다. 개발 환경에서 Effect에 대해 `셋업` 대신 `셋업 -> 클린업 -> 셋업`을 실행하면 `Strict Mode`에서 누락된 클린업 로직이 더 눈에 띄게 됩니다.

`Strict Mode`가 켜져 있으면 React는 `모든 Effect에 대해 개발 환경에서 한 번 더 셋업 + 클린업 사이클을 실행`합니다. 의외로 느껴질 수도 있지만 수동으로 파악하기 어려운 미묘한 버그를 드러내는 데 도움이 됩니다.

### 컴포넌트 검사

더 이상 사용되지 않는 API의 사용 여부를 확인하기 위해 컴포넌트를 검사합니다. React는 `<StrictMode>` 트리 내부의 컴포넌트가 더 이상 사용되지 않는 다음 API 중 하나를 사용하는 경우 경고를 표시합니다.

- `findDOMNode`
- `UNSAFE_componentWillMount`와 같은 `UNSAFE_` 클래스 생명주기 메서드
- 레거시 context (`childContextTypes`, `contextTypes`, `getChildContext`)
- 레거시 문자열 refs (`this.refs`)
