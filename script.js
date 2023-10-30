let result = "0";
let history = [];

function appendToResult(value) {
     history.push(result);
     if (result === "0" && value !== ".") {
          result = value;
     } else {
          result += value;
     }
     document.getElementById("result").value = result;
}

function clearResult() {
     history.push(result);
     result = "0";
     document.getElementById("result").value = result;
}

function calculateResult() {
     try {
          history.push(result);
          result = eval(result).toString();
          document.getElementById("result").value = result;
     } catch (error) {
          result = "Error";
          document.getElementById("result").value = result;
     }
}

function undo() {
     if (history.length > 0) {
          result = history.pop();
          document.getElementById("result").value = result;
     }
}