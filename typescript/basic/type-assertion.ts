// 타입 단언 (type assertion)
let qqq;
qqq = 20;
qqq = 'w';
// let wwww = q // q: any
let wwww = qqq as string;

// DOM API 조작
// <div id='app'>Hello World</div>

// document.querySelector가 돌아가는 라인에서 div가 있다는 보장을 하지 않는다.
// let d = document.querySelector('div');
let d = document.querySelector('div') as HTMLDivElement;

if (d) {
  d.innerText;
}
