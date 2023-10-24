function fetchItemss() {
  let items = ['a', 'b', 'c'];
  return items;
}

let result = fetchItemss();
console.log(result);

// fetchItems라는 함수를 실행하는 시점에서 typescript가 Promise 안에 들어오는 비동기 코드에 대해서는 알 수가 없다.
// function fetchItems(): Promise<unknown>
function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
