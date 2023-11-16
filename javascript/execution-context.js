let a = 1;
function outer() {
  console.log(a); // 1

  function inner() {
    console.log(a); // 2
    a = 3;
  }

  inner();

  console.log(a); // 3
}

outer();
console.log(a); // 4
