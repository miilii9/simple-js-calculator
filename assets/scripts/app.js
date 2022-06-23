const defaultResault = 0;
let currentResult = defaultResault;
let entry = [];
const enteredNumb = function () {
  return parseInt(userInput.value);
};

const calculationMath = function (sign, enterNum, beforeNum) {
  const calcDescrip = `${beforeNum} ${sign} ${enterNum}`;
  outputResult(currentResult, calcDescrip);
};
const logEntry = function (sign, enterNum, beforeNum, result) {
  logon = {
    opperator: sign,
    preNum: beforeNum,
    enteredNumb: enterNum,
    result: result,
  };
  entry.push(logon);
  console.log(entry);
};
const calculatResult = function (calcType) {
  const inputNumb = enteredNumb();
  const preNum = currentResult;
  if (calcType === "add") {
    currentResult += inputNumb;
    logEntry("+", inputNumb, preNum, currentResult);
    calculationMath("+", inputNumb, preNum);
  } else if (calcType === "subtract") {
    currentResult -= inputNumb;
    logEntry("-", inputNumb, preNum, currentResult);
    calculationMath("-", inputNumb, preNum);
  } else if (calcType === "divide") {
    currentResult /= inputNumb;
    logEntry("/", inputNumb, preNum, currentResult);
    calculationMath("/", inputNumb, preNum);
  } else if (calcType === "multiply") {
    currentResult *= inputNumb;
    logEntry("*", inputNumb, preNum, currentResult);
    calculationMath("*", inputNumb, preNum);
  }
};

const addFunc = function () {
  calculatResult("add");
};
const subFunc = function () {
  calculatResult("subtract");
};
const mutiplyFunc = function () {
  calculatResult("multiply");
};
const dividFunc = function () {
  calculatResult("divide");
  if (currentResult === 0) {
    alert("u cant divide on zero");
  }
};

addBtn.addEventListener("click", addFunc);
subtractBtn.addEventListener("click", subFunc);
multiplyBtn.addEventListener("click", mutiplyFunc);
divideBtn.addEventListener("click", dividFunc);
