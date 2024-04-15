# Queue

큐는 FIFO(First In First Out) 원칙을 따르는 선형 자료구조이다.

### Stack과의 차이점

데이터를 프로세싱하는 순서가 다르다.
First-In-First-Out : 가장 먼저 들어간 데이터가 가장 먼저 나온다.

큐는 스택과 마찬가지로 ADT(Abstract Data Type: 추상 자료형)이다.

_Queue의 ADT_ : ADT란 추상 자료형이라고도 하며, 데이터를 구체적으로 구현하는 방식은 생략하고 데이터의 추상적인 형태와 데이터를 이루는 방법만을 정해놓은 것입니다.

ADT 설명
enQueue : x를 큐 맨 뒤에 삽입(저장)한다.
deQueue : 큐 맨 앞에서 하나의 요소를 제거하고 반환한다.
peek : 큐의 맨 앞에서 하나의 요소를 확인한다.
size : 큐에 존재하는 요소의 수를 반환한다.
isEmpty : 큐가 비어있는지를 확인한다.

### 예시

버스에 줄을 서서 기다리고 있다가 타는 상황이라 가정해보자.
순서에 맞춰 먼저 온 사람이 가장 먼저 탑승을 하고 순차적으로 동작한다.

- 버스 줄 : 큐 자료구조(queue)
- 줄 서기 : 요소 추가(enqueue)
- 버스타기 : 요소 제거(dequeue)

## 구현하기

```js
class Queue {
  constructor() {
    this._items = [];
  }

  enqueue(item) {
    this._items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is Empty');
      return;
    }

    return this._items.shift();
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue); // [10,20,30]

queue.dequeue();
queue.dequeue();
console.log(queue); // [30]

queue.size(); // 1
```

### 시간 복잡도

queue자료 구조에는 현재 기본 연산 enqueue, dequeue가 있다.

- enqueue는 아이템 맨 끝에 요소를 push 메서드를 통해 배열에 추가하고 있다.
  -> push의 시간복잡도와 동일하게 `상수 시간인 O(1)의 복잡도`를 갖는다.

- dequeue의 경우 shift 메서드를 활용하여 배열의 맨 앞 요소를 return 하고 있다.
  -> shift의 경우 맨 앞 요소가 제거되고 나머지 모든 요소를 앞으로 한 칸씩 이동한다. 사이즈가 N의 경우 N만큼 이동하기 때문에 `선형 시간인 O(N)의 시간복잡도`를 갖는다.

  여기서 배열이 아닌 *연결리스트를 활용*한다면 dequeue의 **선형 시간을 상수 시간으로 줄일 수 있다.**

## shift()를 사용하지 않는 Queue

```jsx
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail += 1;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head += 1;

    return removed;
  }

  print() {
    let data = '';
    let n = this.head;

    while (this.tail > n) {
      data += this.storage[n];

      n += 1;
    }
    return data;
  }

  isEmpty() {
    return Object.keys(this.storage).length; === 0;
  }
}
```
