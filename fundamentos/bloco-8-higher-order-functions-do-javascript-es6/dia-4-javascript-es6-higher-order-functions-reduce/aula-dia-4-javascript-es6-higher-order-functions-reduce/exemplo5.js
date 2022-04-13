const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbers = (sum, number) => {
  if (number % 2 === 0) {
    sum += number;
  }
  return sum;
};

const sumEvenNumbers = numbers.reduce(evenNumbers);

console.log(sumEvenNumbers);
