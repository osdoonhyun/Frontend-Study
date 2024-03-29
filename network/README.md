# Network

## ❓주소창에 www.google.com을 입력하면 일어나는 일에 대해 설명해 주세요.

웹 브라우저에 해당 도메인 주소를 입력시 과정은 크게 13단계로 나뉘며,

1~5단계는 데이터 받아오는 과정

6~12단계는 웹 브라우저에 렌더링 되는 과정으로 설명을 구분했다.

### 데이터 받아오는 과정

1. `www.google.com`**을 입력하면 입력한 URL 주소 중, 도메인 이름에 해당하는 google.com을 DNS 서버에서 검색합니다.**

   웹 브라우저는 DNS 서버에 검색하기 전에 캐싱된 DNS 기록들을 먼저 확인합니다.

   만약 해당 도메인 이름에 맞는 IP 주소가 존재하면, DNS 서버에 해당 도메인 이름에 해당하는 IP주소를 요청하지 않고 캐싱된 IP주소를 바로 반환합니다. 일치하는 IP주소가 존재하지 않는다면, 다음 과정인 DNS 서버 요청으로 넘어갑니다.

2. **가장 가까운 DNS 서버에서 해당 도메인 이름에 해당하는 IP주소를 찾아 사용자가 입력한 URL 정보와 함께 전달을 합니다.**

   DNS서버가 호스팅하고 있는 서버의 IP주소를 찾기 위해 DNS query를 전달합니다.

   DNS query는 현재 DNS서버에 원하는 IP주소가 존재하지 않으면 다른 DNS 서버를 방문하는 과정을 원하는 IP주소를 찾을 때까지 반복합니다.

   해당 도메인 이름에 맞는 IP주소로 변환하는 과정은 점(.)을 기준으로 계층적으로 구분하여 구성이 됩니다. 해당 계층의 탐색 순서는 뒤에서부터 해당 도메인 이름에 맞는 지역 DNS를 탐색하며, root DNS 서버가 나올때까지 거꾸로 탐색합니다.

   > Ex) . -> com -> google.com

   이와 같이 Local DNS 서버가 여러 DNS 서버를 차례대로 물어봐서 답을 찾는 과정을 Recursive Query라고 부릅니다.

3. **전달받은 IP주소를 이용하여 웹 브라우저는 웹 서버에게 해당 웹 사이트에 맞는 html문서를 요청합니다**

   해당 HTTP 요청 메세지는 [TCP/IP 프로토콜](https://velog.io/@tnehd1998/OSI-7-Layer-TCPIP-4-Layer)을 사용하여 서버로 전송됩니다. TCP는 전송 제어 프로토콜로 데이터의 전송을 제어하고 데이터를 어떻게 보낼 지, 어떻게 맞출 지 정합니다. IP의 특징인 비신뢰성과 비연결성으로 인해 IP 프로토콜 만으로는 통신을 할 수 없습니다. 그렇기에, 신뢰성과 연결성을 책임지는 TCP를 활용하여 통신을 합니다.

   TCP는 3 way handshake 과정을 통해

   연결 및 데이터를 수신받고,

   4 way handshake 과정을 통해

   연결을 종료합니다.

   3 way handshake의 과정

   - A 클라이언트는 B 서버에 접속을 요청하는SYN 패킷을 전송합니다.
   - B 서버는 SYN 요청을 받고A 클라이언트에게 요청을 수락한다는SYN_ACK flag가 설정된 패킷을 전송합니다.
   - A 클라이언트는 B 서버에게 ACK를 전송 후,연결이 이루어지고 데이터가 오고 가게 됩니다.

   !https://velog.velcdn.com/images/tnehd1998/post/53f1170d-7f07-4046-9102-37d92cbbe6ef/image.png

   4 way handshake 과정

   - 클라이언트가 연결을 종료하겠다는FIN플래그를 전송합니다.
   - 서버는 확인메세지 ACK를 보낸 후,자신의 통신이 끝날 때까지 기다립니다.
   - 서버의 통신이 끝났으면연결이 종료되었다고클라이언트에 FIN 플래그를 전송합니다
   - 클라이언트는 확인했다는 메세지 ACK를 보냅니다.
     > 만약, Client에서 세션을 종료시킨 뒤 도착하는 패킷이 있다면해당 패킷은 Drop되고 데이터는 유실되게 됩니다.이러한 현상을 위해Client는 Server로부터 FIN을 수신하더라도일정시간동안 세션을 남겨놓고 잉여 패킷을 기다리는TIME_WAIT과정을 마지막으로 거치게 됩니다.

   !https://velog.velcdn.com/images/tnehd1998/post/1077f152-2640-46fd-9fed-3074794ae123/image.png

   ### 4. WAS와 데이터베이스에서 웹페이지 작업을 처리합니다.

   웹 서버 혼자서 모든 로직 처리 및 데이터 관리를 하게되면

   서버에 과부하가 일어날 가능성이 높습니다.

   그렇기에 서버의 일을 돕는 조력자 역할을 하는 것이 WAS입니다.

   WAS는 사용자의 컴퓨터나 장치에 웹 어플리케이션을 수행해주는 미들웨어 입니다.

   특정 데이터 요청을 브라우저로부터 받게되면,

   웹 서버는 페이지의 로직이나 데이터베이스의 연동을 위해

   WAS에게 이들의 처리를 요청합니다.

   WAS는 해당 요청을 통해 동적인 페이지 처리를 담당하고,

   DB에서 필요한 데이터 정보를 받아 그에 맞는 파일을 생성합니다.

   > 웹 서버 : 정적인 파일(HTML, CSS, 이미지 파일)을 처리
   > WAS : 동적인 파일(JS, TS)을 처리

   !https://velog.velcdn.com/images/tnehd1998/post/2d477145-dfd1-4f8e-9c8d-bfdb57d0acf5/image.png

   ### 5. WAS에서의 작업 처리 결과들을 웹 서버로 전송하고, 웹 서버는 웹 브라우저에게 html 문서 결과를 전달합니다.

   전달 과정에서 status code를 통해

   서버 요청에 따른 결과 및 상태를 전달합니다.

   > 1xx : 정보가 담긴 메세지
   > 2xx : response 성공
   > 3xx : 클라이언트를 다른 URL로 리다이렉트
   > 4xx : 클라이언트 측에서 에러 발생
   > 5xx : 서버 측에서 에러 발생

   `브라우저 렌더링 과정`

   ### 6. Critical Rendering Path를 통해 웹 브라우저 화면에 웹 페이지 내용을 출력

   웹 브라우저에 출력되는 단계를 Critical Rendering Path라고 하며 크게 6단계로 분류된다.

   성능 최적화하려면 수신받은 HTML, CSS, JS 파일들을 어떤 단계를 거쳐 일어나는지를 파악한 후, 해당 과정들을 최소화하는 것이 중요하다.

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/8549e2b0-87c5-4b6f-8e89-bcea50d3d49f/fa559f0c-cb4b-40db-850f-3d64b9dae6ab/Untitled.png)

   ### 7. DOM 트리 빌드

   이전 단계에서 통신을 통해 받아온 HTML 파일들은 바이트 형태로 전달되게 되게 된다.

   바이트 → 문자 → 토큰 → 노드 → 객체 모델로 전환하는 작업이 수행된다.

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/8549e2b0-87c5-4b6f-8e89-bcea50d3d49f/f9f7a75c-b335-4cd4-8e73-51e9c0f0f22c/Untitled.png)

   1. 변환 (바이트 → 문자)

   - 바이트 형태의 파일을 지정된 인코딩에 따라 개별 문자로 변환한다.

   1. 토큰화 과정 (문자 → 토큰)

   - “<” 문자를 만나면 상태를 태그 열림으로 변하고, 이후 만나는 a~z의 문자들은 “>” 문자를 만날때까지 태그 이름의 상태로 인식하게 된다.
   - ">" 문자를 만난 후, 현재 토큰을 발행되고 상태는 다시 자료로 돌아갑니다.
   - 이후 문자들을 소비하면서 문자 토큰이 생성되고 해당 과정은 "<" 문자를 만날 때까지 진행됩니다.
   - "<" 문자에 만나면 다시 태크 열림 상태로 변합니다.
     "/" 문자는 종료 태그 토큰을 생성하며 태그이름 상태로 변경됩니다.
     해당 상태는 ">" 문자를 만날때까지 유지됩니다.
   - 해당 과정을 모든 파일의 자료를 확인할 때까지 반복합니다.

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/8549e2b0-87c5-4b6f-8e89-bcea50d3d49f/57803198-6ac8-4e06-9bb0-8f30d04365ec/Untitled.png)

   1. 렉싱 (토큰 -> 노드)

   - 생성된 토큰들을규칙 및 속성에 맞는 객체로 변환시킵니다.

   1. DOM 생성 (노드 -> 객체 모델)

   - 생성된 객체는 트리 데이터 구조로 연결이 됩니다.
   - 해당 트리 데이터 구조는 원래 마크업에서 정의된상위-하위 관계도 포함이 됩니다.

   해당 프로세스의 최종 출력은 DOM이며,

   해당 형태가 트리 형태를 띄고 있기 때문에

   DOM Tree라고도 부릅니다.

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/8549e2b0-87c5-4b6f-8e89-bcea50d3d49f/95c8026f-68b3-4e73-928f-e8e63b99eeea/Untitled.png)

   ### 8. CSSOM 트리 빌드

   HTML에서 사용했던 객체 모델로 전환하는 작업이 CSS 파일에 똑같이 적용된다.

   CSSOM 트리 형태를 만듦으로써 특정 객체에 최종 스타일로 계산할 때 상위 객체의 스타일을 하향식 규칙을 저굥하는 방식으로 계산되는 스타일을 재귀적으로 세분화하게 된다.

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/8549e2b0-87c5-4b6f-8e89-bcea50d3d49f/ee616fab-2590-4487-adc1-ee186ff7efa7/Untitled.png)

   ### 9. Render Tree 생성

   기존에 제작된 DOM과 CSSOM을 결합하여 Render Tree를 생성한다.

   Render Tree는 렌더링에 필요한 노드만 선택하여 페이지를 렌더링하는데 사용한다.

   Render Tree가 만들어지는 과정을 간단히 말하면, Document객체부터 각 노드를 순회하면서 각각에 맞는 CSSOM을 찾아서 규칙을 적용한다. 그러면서 렌더와 관련되 요소들은 렌더 트리에 포함시키게 된다.

   meta 태그나 display:none 속성을 가진 요소들은 렌더와 관련이 없으므로 포함되지 않음

   ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/8549e2b0-87c5-4b6f-8e89-bcea50d3d49f/e3f6a5f3-903f-46b9-885b-d5fb12c54d78/Untitled.png)

   ### 10. Layout (Reflow)

   Render Tree의 노드들에 대해서 뷰포트 내에서 요소들에 정확한 위치와 크기를 계산하는 단계이다. 페이지 상에 존재하는 객체의 크기를 렌더링 트리의 루트부터 시작하여 모든 객체의 정확한 위치와 크기를 계산한다.

   css에서 %나 em과 같은 상대적인 단위를 사용했을 때에는 뷰포트에 맞춰서 픽셀 단위로 변환된다.

   ### 11. Paint (Repaint)

   Layout 과정에서 렌더링 엔진이 각 요소들이 어떻게 생겼고 어떻게 보여줄지 알게 되면 화면에 실제 px로 변환하는 과정을 거친다.

   계산된 값들을 기반으로 화면에 필요한 요소들인 텍스트 이미지들이 실제로 그리는 작업을 실행한다.

   레이아웃 단계에서 계산된 모든 위치, 크기를 실제 픽셀로 변환하여 화면에 출력한다.

   11-1. Reflow & Repaint

   특정 액션과 이벤트에 따라 html의 요소와 크기나 위치의 크기를 변경해야 하는 경우가 발생하며 해당 과정을 reflow라고 한다.

   - 해당 과정이 발생하면 렌더링 트리와 각 요소들의 크기와 위치를 다시 계산해야 한다.
   - reflow에 따라 다시 페인팅을 해줘야 하는 repaint 단계 역시 수행된다.

   하지만, reflow가 발생해야 repaint가 발생하는 것이 아닌 레이아웃에는 영향을 주지 않지만, 다시 페인팅을 해야하는 background-color, visibility와 같은 스타일을 변경할 때는 독단적으로 수행된다.

   Reflow와 Repaint를 최대한 줄여야 해당 과정들을 다시 거치지 않기에 가능한 과정을 최소한으로 고려해야 성능 최적화와 연결된다.

   ### 12. Composition

   Layout과 Paint를 수행하지 않고 레이어의 합성만 실행시키는 단계이다.

   Transform, opacity와 같은 요소들을 의미한다.

   ### 13. 화면이 웹 브라우저에 출력된다.

## ❓RESTful API에 대해서 설명해 주세요

REST API는 인터넷 식별자 URI(Uniform Resource Identifier)와 HTTP를 기반으로 하고 브라우저 간 호환성이 좋은 JSON 형식을 주로 사용한다.

REST의 가장 큰 중요한 특성은 각 요청이 어떤 정보나 동작을 위한 것인지 그 모습 자체로 추론이 가능하다.

REST는 문서, 그림, 데이터 등의 자원을 이름으로 구분해서 해당 자원에 대한 상태, 정보를 주고 받는 것을 의미한다. 또한 HTTP Method를 활용해서 해당 리소스에 대한 crud를 적용하는 것을 의미한다. REST API에서는 다양한 HTTP Method 중에서도 GET, POST, PUT, PATCH, DELETE가 있다.

REST API는 HTTP 요청을 할 때 어떤 URI에 어떤 Method를 사용할지에 대한 약속이다.

---

API 이기 때문에, 서버와 클라이언트가 통신을 하는 약속 중 REST 한 형태를 띄는 것.

REST API 메세지를 읽는 것만으로도 메세지가 의도하는 바를 명확하게 파악할 수 있다.

REST API는 기본적으로 HTTP 프로토콜을 사용해서 서버 클라이언트나 요청하고 응답 처리를 하는데, 이 말인 즉, HTTP 인프라를 그대로 사용하기 때문에, REST API 사용을 위한 별도의 인프라 구축이 필요없다.

그렇기에 HTTP의 특징인 클라이언트와 서버가 독립적으로 운영이 가능하다.

REpresentation : 표현

State : 상태

Transfer : 전달

자원의 표현을 가지고 상태를 전달한다.

URI 설계시 리소스를 URI에 명시하고 상태를 HTTP 메서드로 해준다.

모든 동작은 Method로 나타낸다(GET, POST, PUT, PATCH, DELETE)

---

REST: 웹에서 사용하는 아키텍쳐
서버와 클라이언트 간 통신 방식 중 하나로,
자원을 이름으로 구분하여,
자원의 상태를 주고 받는 통신 방식이다. -> Http 메서드 Http 상태

### RESTful API 설계시 규칙

REST는 리소스(자원)를 표현하고 상태를 전달하는 방법이므로, API설계 시 아래 두 가지 규칙을 지키면 좋다.

1. URI는 자원만을 표현하고 동사보다는 명사로 작성할 것. 단수 보다는 복수로.

- 회원 -> `/members`

  1-1. 슬래시 구분자(/)는 계층 관계를 나타내는 데 사용

  - 동물 -> `/animals/mammals/lions`

2. 행위는 아래 HTTP 메서드로만 표시할 것.

- URI에는 행위는 표시하지 않음. 등록 -> `POST`

**HTTP 메서드 (HTTP Methods)**
REST API에서는 HTTP 메서드를 사용하여 리소스를 다룹니다. 주요 HTTP 메서드는 다음과 같습니다.

- **GET:** 리소스를 조회하기 위해 사용됩니다.
- **POST:** 새로운 리소스를 생성하기 위해 사용됩니다.
- **PATCH:** 기존 리소스의 일부를 업데이트하기 위해 사용됩니다.
- **PUT:** 기존 리소스를 업데이트하기 위해 사용됩니다.

### HTTP 주요 상태코드

**200**

GET: 리소스를 불러와서 메시지 바디에 전송되었습니다.
HEAD: 개체 해더가 메시지 바디에 있습니다.
PUT or POST: 수행 결과에 대한 리소스가 메시지 바디에 전송되었습니다.

**201: created**

리소스 생성에 성공한 응답 코드
일반적으로 Post, Put 요청 이후에 사용

**202: Accepted**

요청은 접수가 되었으나 처리가 완료되지 않음

- 배치처리 같은 곳에 사용
- ex) 요청 접수 후 1시간 뒤에 배치 프로세스 요청을 처리함

**204: No Content**

서버가 요청을 성공적으로 수행했지만, 응답 페이로드 본문에 보낼 데이터가 없음

- 웹) 문서 편집기에서 save 버튼
- save 버튼의 결과로 아무 내용이 없어도 된다.
- save 버튼을 눌러도 같은 화면을 유지해야 한다.
- 결과 내용이 없더라도 204 메세지 만으로도 성공을 인식할 수 있다.

**400: Bad Request**

클라이언트가 잘못된 요청을 해서 서버가 요청을 처리할 수 없음

- 요청 구문, 메세지 등 오류
- 클라이언트 요청 내용을 다시 검토하고 보내야 함

**401: unauthorized**

- 인증되지 않은 사용자

**403: forbidden**

- 클라이언트가 접근할 권리 없음. 미승인
- ex) 어드민 등급이 아닌 사용자가 로그인을 했지만, 어드민 등급의 리소스에 접근하는 경우

**404: Not Found**

- 요청 리소스가 서버에 없음
- 요청 페이지가 없음
- 또는 클라이언트가 권한이 부족한 리소스에 접근할 때 해당 리소스를 숨기고 싶을

(큰 그림)
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

[출처 MDN] https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

## ❓CORS각 무엇인지 설명해 주세요.

CORS : Cross-Origin Resource Sharing 교차 출처(다른 출처) 리소스 공유 정책

**출처(Origin)**

우리가 어떤 사이트를 접속할때 인터넷 주소창에 우리는 URL이라는 문자열을 통해 접근하게 된다.이처럼 URL은 https://domain.com:3000/user?query=name&page=1 과 같이 하나의 문자열 같지만, 사실은 다음과 같이 여러개의구성 요소로 이루어져 있다.Protocol(Scheme) : http, httpsHost : 사이트 도메인Port : 포트 번호Path : 사이트 내부 경로Query string : 요청의 key와 value값Fragment : 해시 태크몇몇 독자분들 중에 이미 각 URL의 속성들에 대해 다 알고있는 수준이 높은 분들도 있고, 아직은 상세히 잘 모르는 분들도 계실거라 추측한다.CORS를 이해하는데 있어 저것들을 모두 알아야 되는 것은 아니고, 딱 3가지만 기억하면 된다.Origin : Protocol + Host + Port즉,출처(Origin) 라는 것은 Protolcol 과 Host 그리고 Port 까지 모두 합친 URL을 의미한다고 보면 된다. 간단하게 자바스크립트로도 현재 사이트의 Origin을 알아낼 수도 있다

- Protocol(Scheme) : http, https
- Host : 사이트 도메인
- Port : 포트 번호
- Path : 사이트 내부 경로
- Query string : 요청의 key와 value값
- Fragment : 해시 태크

`Origin : Protocol + Host + Port`

→ 출처(Origin)은 Protocol과 Host와 Port까지 모두 합친 URL 기본포트 번호는 생략됨.

### 동일 출처 정책(SOP : Same-Origin Policy)

SOP(Same-Origin Policy) 는 동일한 출처에 대한 정책을 말한다. SOP 정책은 `‘동일한 출처에서만 리소스를 공유할 수 있다.’`

즉, 동일 출처 서버에 있는 리소스는 자유롭게 가져올 수 있지만, 다른 출처 서버에 있는 리소스는 상호작용이 불가능하다.

**그렇다면 SOP 정책은 왜 필요할까?**

해커가 사용자 브라우저를 프록시처럼 악용할 수 있다. 이러한 악의적인 경우를 방지하기 위해, SOP 정책을 통해 동일하지 않는 다른 출처의 스크립트가 실행되지 않도록 브라우저에서 사전에 방지하는 것이다.

**그렇다면 다른 출처의 리소스가 필요하다면 어떻게 해야 할까?**

### CORS

교차 출처 리소스 공유는 추가 HTTP 헤더를 사용하여, 한 **출처**에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 **브라우저**에 알려주는 체제다.

**CORS 접근제어 시나리오**

1. **단순 요청(Simple Request)**

preflight와는 다르게 바로 본 요청(Actual Request)를 보내면서 그 즉시 이것이 Cross-Origin인지 확인하는 절차이다.

Simple Request를 보내기 위해서는 아래의 조건을 모두 만족해야 한다.

<aside>
💡 **왜 Preflight가 필요할까?**
simple request로 하면 한 번 요청하고 끝인데, 왜 굳이 두 번 요청해야할까?
**CORS를 모르는 서버를 위함이다.**

origin은 [bom.com](http://bom.com) 라고 브라우저에게 보내고 브라우저는 그대로 서버로 보낸다. 서버는 CORS에 관련해서 모르기 때문에 Allow-Origin 은 없이 해결하고 응답을 보낸다. 그러고 나서 브라우저는 CORS 에러가 뜬다.
서버는 일단 모든 것을 해결하고 응답을 보냈는데, 브라우저에서 CORS 에러를 낸다.

위와 같이 하면 클라이언트는 브라우저로 보내고 브라우저는 서버로 보내는데, 서버 입장에서는 CORS 설정이 없으니, Allow-Origin이 없다. 그러면 브라우저는 에러를 내뱉는다. 사전 요청이기에 서버는 어떠한 행동도 하지 않고 실제 요청도 보내지지 않음.

</aside>

1. **프리플라이트 요청(Preflight Request)**

preflight : 본 요청을 보내기 전에 서버한테 요청이 가능한지 OPTIONS 메서드를 통해 물어보는 작업

1. OPTIONS 메서드를 통해 다른 도메인의 리소스에 요청이 가능한 지 확인 작업

2. 요청이 가능하다면 실제 요청(Actual Request)를 보낸다.

**Preflight Request 흐름**

만약 preflight request가 거부가 되면, actual request는 보내지 않는다.

preflight시 물어볼 것과 거기에 맞는 preflight request의 Format이 있다.

**Access-Control-Max-Age : Preflight 응답 캐시 기간이란?**

preflight는 사전요청(Request)과 실제요청(Actual Request) 한 번의 요청을 보낼때마다 총 2개의 요청이 보내진다. 이것은 리소스적으로 좋지 않기 때문에 브라우저는 preflight 응답에 대해서 브라우저는 캐싱을 해두고 다음 똑같은 요청을 보낼 때, preflight 캐싱된 것을 확인하고 preflight의 사전 요청을 미리 보내지 않고 바로 본 요청을 보낸다.

1. **인증정보 포함 요청(Credentialed Request)**

쿠키나 JWT 토큰을 클라이언트에서 자동으로 담아서 보내고 싶을 때, credentials를 include하여 서버 측까지 전달해준다.(서버측도 설정해야함)

## ❓ XSS와 CSRF에 대해 설명해주세요.

### XSS(Cross Site Scripting)

- 공격하려는 사이트에 스크립트를 넣는 기법으로, 공격에 성공하게 된다면 해당 스크립트가 심어진 페이지에 접속한 사용자는 스크립트를 실행하게 되어 의도치 않은 행동을 수행시키거나, 쿠키/세션/토큰 등을 탈취당할 수 있습니다.
- XSS 공격 유형은 아래와 같은 유형이 존재합니다.

1. Reflected XSS

- URL 파라미터에 스크립트를 넣음으로써 그 즉시 스크립트를 실행시키는 방식입니다.
- 공격자가 HTTP 요청에 악성 콘텐츠를 주입하면, 그 결과가 사용자에게 반사되는 형태로, 특정 사용자의 PC에서만 악성 스크립트가 실행됩니다.

2. Stored XSS

- 스크립트가 서버에 저장되어 실행되는 방식으로, 댓글, 혹은 게시물에 악성 코드를 게시함으로서 데이터베이스에 악성 코드를 저장하도록 만듭니다.
- 불특정 다수를 대상으로 공격이 진행될 수 있습니다.

3. DOM XSS

- 악성 스크립트가 DOM 영역에서 실행되는 방식입니다.
- 서버와의 상호작용 없이 브라우저 자체에서 스크립트가 실행됩니다.

#### 예방책에 대해 설명해주세요.

- XSS 필터를 통해 `<`, `>` 를 `&lt;`, `&gt;` 처럼 HTML 문자로 바꾸어 HTML 코드가 아닌 단순 문자로 인식하게 만듦으로써 스크립트 실행을 막습니다.
- 쿠키에 `HttpOnly` 옵션을 활성화 시킴으로써 스크립트를 통한 쿠키 접근을 막습니다.

### CSRF(Cross Site Request Forgery)

- 타 사용자의 권한을 이용해 자신이 의도한 동작을 서버로 요청하게끔 유도하는 공격 기법입니다.
- 피해자의 권한으로 공격자가 의도한 요청을 보내게 되는데, 만약 공격 대상이 관리자일 경우 피해를 가중시킬 수 있습니다.

#### 예방책에 대해 설명해주세요.

- 중요 기능에 추가 인증(비밀번호 입력, 휴대폰 인증, Captcha) 등의 실제 유저만이 수행할 수 있는 인증 기능을 구현함으로써 공격을 막을 수 있습니다.
- 서버에서 `Set-Cookie` 에 `SameSite` 에 적절한 속성을 줌으로써 `SameSite` 일 때만 Cookie 가 전송될 수 있도록 해 공격을 막을 수 있습니다.

## ❓프록시(Proxy)에 대해 설명해주세요.

**개념**

프록시란 인터넷과 관련되어 쓰이는경우 컴퓨터 네트워크에서 중간 매개 역할을 하는 시스템 또는 라우터입니다.
클라이언트와 웹 서버 중간에 위치하여 통신을 중개하는 역할을 하며, 프록시 서버는 기본적으로 자체 IP 주소를 가지고 있는 인터넷 상의 컴퓨터입니다.

### 프록시 서버의 용도

1. 익명성 보호
   프록시를 사용하여 Client의 실제 IP 주소를 숨기고 프록시 서버의 IP 주소를 사용하여 웹서버나 다른 리소스에 접근할 수 있습니다. 이를 통해 온라인 익명성을 유지하거나 지역 제한된 콘텐츠에 접근할 수 있습니다.
2. 보안
   클라이언트와 서버 사이의 트래픽을 중개하여, 악의적인 트래픽을 필터링하고 보안 검사를 수행할 수 있습니다. 이를 통해 웹 칠터링을 통해 특정 웹 사이트에 접근을 제한할 수 있습니다.
3. 캐시
   프록시는 이전에 요청한 데이터를 저장하여 동일한 요청이 다시 들어올 때 서버로부터 데이터를 다시 가져오지 않고 저장된 데이터를 반환하여 네트워크 대역폭을 절약하고 응답 시간을 개선할 수 있습니다.
4. 접근 제어
   네트워크 접근을 제어하여 특정 웹사이트나 서버에 대한 접근을 허용/차단 할 수 있습니다. 예로 기업 네트웨크에서 특정 웹사이트를 차단하거나, 부서별로 접근을 제한하는 데에 사용할 수 있습니다.
5. 로깅과 모니터링
   로깅과 모니터링: 프록시는 클라이언트와 서버 간의 모든 트래픽을 기록하고 모니터링할 수 있으므로 네트워크 활동을 추적하고 분석하는 데 도움을 줍니다.

### Forward Proxy (정방향 프록시)와 Reverse Proxy (역방향 프록시)

프록시의 종류는 Forward Proxy, Reverse Proxy, Transparent Proxy, Anonymous Proxy, High Anonymity Proxy 등 많은 종류가 있으며
그 중에서 Forward Proxy와 Reverse Proxy에 대해 알아보겠습니다.

- Forward Proxy (정방향 프록시)
  정방향 프록시는 Client 앞에 위치하며, 내부 네트워크 내의 사용자 그룹에 데이터를 가져오는 데 사용됩니다. 요청이 전송되면 프록시 서버는 요청을 검사하여 연결을 계속 할 지 여부를 결정합니다.

- Reverse Proxy (역방향 프록시)
  포워드 프록스(정방향 프록시)와 달리 리버스 프록시는 웹 서버 앞에 위치라여 브라우저의 요청을 웹서버로 전달합니다.
  이는 웹 서버의 네트워크 가장자리에서 사용자의 요청을 가로채는 방식으로 작동합니다. 그런 다음 원본 서버에 요청을 보내고 응답을 받습니다.

## ❓JWT 토큰, 세션 방식에 대해 설명해 주세요.

JWT는 JSON Web Token의 약자로 JSON 형식의 웹에서 사용되는 토큰을 말하고, Session은
서버 측에서 상태 정보를 유지하는 것으로 둘 다 사용자의 인증/인가 처리를 위해 클라이언트와 서버 사이에서 정보를 주고 받는데 사용됩니다.

### JWT 구조

JWT은 헤더, 페이로드, 서명 으로 `.` 기호를 통해 구분된다.

`<헤더>.<페이로드>.<서명>`

헤더(header) : 토큰의 유형과 서명 알고리즘

페이로드(payload) : 실제로 전송하려는 데이터를 포함, 사용자의 인증/인가 정보

서명(signature) : 헤더와 페이로드가 비밀키로 서명되어 저장되고 토큰이 변조되었는지 여부를 확인하는 데 사용

### JWT의 사용

JWT는 토큰 자체에 정보를 저장하여 session의 데이터를 저장 관리에 의한 서버의 부담을 해결해줍니다.
보통 클라이언트가 어떤 서비스의 인가 서버를 통해 로그인에 성공하면 JWT 토큰을 획득할 수 있는데요. 그러면 클라이언트는 해당 서비스의 API를 호출할 때 JWT 토큰을 보내서 원하는 자원에 접근하거나 허용된 작업을 수행할 수 있게됩니다.
단점으로는 발행된 토큰에 대해 서버는 제어할 수 없어 탈취 당했을 때 보안에 취약하다는 단점이 있어 이를 해결하고자, accessToken, refreshToken을 같이 사용하는 방식을 통해 대비할 수 있습니다.

### Session 방식

서버 기반 인증에서 사용자가 로그인을 성공하면 서버에서 사용자에 대한 세션을 생선합니다. 또한 사용자의 브라우저에는 세션 ID를 저장하는 쿠키가 생성됩니다. 서버는 세션 ID를 통해 사용자를 식별하고 사용자에 대한 정보를 저장, 관리합니다.

## ❓로드밸런싱에 대해 설명해주세요.

로드 밸런싱이란 서버에 들어오는 네트워크 트래픽 부하(Load)를 백엔드 서버 그룹에 효율적으로 분산(Balancing)하는 것을 의미한다.

### 기능

- 여러 서버에 걸쳐 클라이언트 요청이나 네트워크 로드를 효율적으로 분산
- 온라인 상태인 서버에만 요청을 보내 고가용성과 안정성을 보장
- 수요에 따라 서버를 추가하거나 빼는 유연성 제공
- 보안 계층을 추가할 수 있는 기능 내장으로 어플리케이션 보안
- 응답 시간을 늘리고 네트워크 지연 시간을 줄려 어플레케이션 성능 향상

### 로드 밸런싱 알고리즘

로드 밸런싱 알고리즘은 로드 밸런서가 서로 다른 클라이언트 요청 각각에 가장 적합한 서버를 결정하기 위해 따르는 규칙 세트입니다. 로드 밸런싱 알고리즘은 크게 2가지 범주로 나뉨니다.

**정적 로드 밸런싱**: 정적 로드 밸런싱 알고리즘은 고정된 규칙을 따르며 현재 서버 상태와 무관합니다.

- 라운드 로빈 방식
- 가중 기반 라운드 로빈 방식
- IP 해시 방식

  **동적 로드 밸런식**: 동적 로드 밸런싱 알고리즘은 트래픽을 배포하기 전에 서버의 현재 상태를 검사합니다.

- 최소 연결 방식
- 가중치 기반 최소 연결 방식
- 최소 응답 시간 방식
- 리소스 기반 방식

[출처 AWS] https://aws.amazon.com/ko/what-is/load-balancing/
[출처 nginx] https://www.nginx.com/resources/glossary/load-balancing/
