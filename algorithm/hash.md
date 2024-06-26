# Hash

hash는 `key: value`의 형태를 갖는 하나의 자료구조이다.
무언가를 찾기 위한 검색어 = key
그 검색어로 나온 결과 = value

배열이란 자료구조는 정수로만 접근이 가능하기 때문에 값을 찾기 어렵다.
0부터 배열 끝까지 순회하며 찾는 값을 맞는지를 비교하고 검색하게 된다.
hash의 경우 String 타입이나 다른 어떤 데이터형을 기반으로 자료구조를 접근하고 데이터를 관리할 수 있다.

즉, `hash는 모든 데이터 타입으로 접근이 가능하다.`는 것이 특징이다.

**배열**은 "key"값이 연속적인 0부터 시작하는 정수로 된 인덱스를 key 값으로 갖는 객체이다.

### 언제 hash 자료구조를 사용할까?

String을 기반으로 정보를 기록하고 관리해야 할 때

ex)

1. 완주하지 못한 선수
   선수 이름 -> 완주 여부
   선수 이름이 String 이니 Hash로 관리해야겠다.
   String Key : bool Value

2. 게시판 사용자
   신고 당한 사람을 기준으로 신고자들의 목록을 관리해야
   신고 당한 사람의 이름이 String이니 Hash를 써야겠다고 판단.
   String Key ArraList<String> Value

3. 위장
   옷의 종류에 따라 몇 개의 옵션이 있는지
   옷의 종류가 정수가 아니라 얼굴 / 상의 / 하의 / 겉옷
   String Key : Integer Value

** 정리 : String을 기준으로 정보를 기록하고 관리하려면 단순 배열을 쓸 수 없으니 Hash를 활용하자 **

### Hash Table (hash map)

- `배열`과 `해시 함수(hash function)`를 사용하여 map을 구현한 자료구조
- 일반적으로 `상수 시간으로 데이터에 접근`하기 때문에 시간복잡도가 상수 시간이다.

Hash Table에서 Hash function은 임의의 데이터를 받아 정수 값이 아웃풋으로 나오게 된다.

**해시 함수**

- 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수
  - ex) `h(x) = x mod 13` x라는 임의의 길이의 데이터를 0~12까지의 고정된 길이의 데이터가 나오게 된다.
- `해시 함수`에 값을 넣어서 나온 함수값을 `해시값` 또는 `해시`라고 부르고 해시값을 구하는 과정을 `해싱`이라고 한다.
- 단방향성을 갖는다. key -> value 값을 찾을 수는 있지만, value를 통해 key를 찾는건 불가능하다.

**해시 충돌**

- 해시 함수가 서로 다른 두 개의 입력 값에 대해 같은 출력값을 내는 상황
