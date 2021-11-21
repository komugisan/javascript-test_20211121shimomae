//問題1

const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (item) {
  const value1 = array.indexOf(item);
  const value2 = array.indexOf(item, value1 + 1);
  return value2 === -1;
});

console.log(result);

//問題2

function leapYear(checkYear1, checkYear2) {
  const yearArray = [checkYear1, checkYear2];
  const yearResult = [];

  yearArray.forEach((value) => {
    if (value % 400 === 0) {
      yearResult.push( `${value}年はうるう年です。`);
    } else if (value % 4 === 0 && value % 100 !== 0) {
      yearResult.push(`${value}年はうるう年です。`);
    } else {
      yearResult.push(`${value}年はうるう年ではありません。`);
    }
  });
  return yearResult;
};

(leapYear(2020, 2021)).forEach((value) => {
  console.log(value);
});