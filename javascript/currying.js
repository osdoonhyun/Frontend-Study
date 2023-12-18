function fn(x, y) {
  return x + y;
}

fn(1, 2); // 3

function curried_fn(x) {
  return function (y) {
    return x + y;
  };
}

// 화살표 함수 위 curried_fn과 동일
const curried_arrow_fn = (x) => (y) => x + y;

console.log(curried_fn(1)(2), curried_arrow_fn(1)(2)); // 3 3

function makeCoffee(roastType) {
  return function (sugar) {
    return function (cream) {
      return log(`Coffee ${roastType}, sugar: ${sugar}, cream: ${cream}`);
    };
  };
}
makeCoffee('Dark Roast')(1)(2); // Coffee Dark Roast sugar: 1, cream: 2

// currying 부분 적용
function makeCoffee(roastType) {
  return function (sugar) {
    return function (cream) {
      return log(`Coffee ${roastType}, sugar: ${sugar}, cream: ${cream}`);
    };
  };
}

const mediumRoast = makeCoffee('Medium Roast');
const order1 = mediumRoast(1)(2);
const order2 = mediumRoast(3)(5);

console.log(order1); // Coffee Medium Roast, sugar: 1, cream: 2
console.log(order2); // Coffee Medium Roast, sugar: 3, cream: 5
