const numbers = [1, 2, 3, 4]
/**/

function squared() {
  let arr = [];
  for (let i = 0; i < numbers.length;i+){
    arr.push(numbers[i] * numbers[i]);
  }
  return console.log(arr);
}
squared(numbers);

/*Declarativo*/
console.log(numbers.map(num=>num*num));
