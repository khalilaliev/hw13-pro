// !Task 1
const arr = () => {
  let thirty = 30;
  for (let i = 20; i < thirty; i += 0.5) {
    // if (i === 25) {
    //   break;
    // }
    console.log(i);
  }
};
arr();

// !Task 2
const dollarCycle = () => {
  let dollarValue = 27;
  for (let i = 10; i <= 100; i += 10) {
    const summ = dollarValue * i;
    console.log(`Task 2: ${summ} dollars`);
  }
};
dollarCycle();

// !Task 3
const squareOfNumber = (N) => {
  for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N) {
      console.log(square);
    } else {
      break;
    }
  }
};

squareOfNumber(25);

// !Task 4
const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const result = isPrimeNumber(97);
console.log("Task 4:", result);

// !Task 5
const isDegreeNumber = (number) => {
  if (number === 0) {
    return false;
  }
  for (let i = 1; i < number; i++) {
    if (number % 3 !== 0) {
      return false;
    }
  }
  return true;
};
const degreeResult = isDegreeNumber(81);
console.log("Task 5:", degreeResult);
