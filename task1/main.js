function getRow(firstRow, secondRow, symb) {
  let count_first = 0;
  let count_second = 0;

  for (let i in firstRow) {
    if (firstRow.charAt(i) === symb) {
      count_first++;
    }
  }

  for (let i in secondRow) {
    if (secondRow.charAt(i) === symb) {
      count_second++;
    }
  }

  console.log(count_first, count_second);

  if (count_first === 0 && count_second === 0) {
    alert('Буква не найдена в обеих строках');
  } else if (count_first > count_second) {
    return alert(`Больше всего '${symb}' в строке: ${firstRow}`);
  } else return alert(`Больше всего '${symb}' в строке: ${secondRow}`);
}

let firstRow = '';
let secondRow = '';
let symb = '';

while (!firstRow || !secondRow || !symb) {
  firstRow = prompt('Введите первую строку');
  secondRow = prompt('Введите вторую строку');
  symb = prompt('Введите букву для поиска');
}

getRow(firstRow, secondRow, symb);
