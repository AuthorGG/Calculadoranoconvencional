const defaultResult = 0;
let currentResult = defaultResult; 
let logEntries = []
//gets Input from input field
function getUserNumberInput (){
  return parseInt(userInput.value);
}
//generates and writes calculation log it makes it cleaner

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //function from vendor file
}
function writeToLog (operationIdentifier, 
  prevResult, 
  enteredNumber, 
  newResult
){
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    enteredNumber: enteredNumber,
    newResult: currentResult,
  }; 
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult =currentResult;
  currentResult += enteredNumber; 
  createAndWriteOutput("+", initialResult, enteredNumber);
 writeToLog('Add', initialResult, enteredNumber, currentResult);
}


function substract() {
const enteredNumber = getUserNumberInput();
const initialResult = currentResult;
  currentResult -=  enteredNumber; 
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog('Substract', initialResult, enteredNumber, currentResult);
}

function multiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
    currentResult = currentResult * enteredNumber; 
    createAndWriteOutput("*", initialResult, enteredNumber);
    writeToLog('Multiply', initialResult, enteredNumber, currentResult);
}
function divide (){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
    currentResult = currentResult / enteredNum; 
    createAndWriteOutput("/", initialResult, enteredNumber);
    writeToLog('Divide', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click',multiply);


