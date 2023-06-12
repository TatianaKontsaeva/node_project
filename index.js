let n = 20;
 
simpleNum:
for (let i = 2; i <= n; i++) { // Для всех i...
 
  for (let m = 2; m < i; m++) { //проверяем, делится ли число
    if (i % m == 0) continue simpleNum; // если не подходит, то берем следующее
  }
 
  console.log(i);
}