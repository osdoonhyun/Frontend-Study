const emails: Dropdown<string>[] = [
  // const emails: { value: string; selected: boolean }[] = [
  //object[]
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.com', selected: false },
];

const products: Dropdown<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem<T>(item: Dropdown<string> | Dropdown<number>) {
function createDropdownItem<T extends string>(item: Dropdown<T>) {
  // function createDropdownItem(item) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag?.appendChild(item);
});

// 인터페이스에 제네릭 선언하는 방법
// interface Dropdownp {
//   value: string;
//   selected: boolean;
// }
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

// 정의된 타입 이용하기 : extends

// keyof로 제네릭 타입 제한하기
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name');
getShoppingItemOption('price');
