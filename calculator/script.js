let display = document.getElementById("display");
let history = [];

function press(value) {
  if (value === "not") {
    display.value = "not(" + display.value + ")";
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const expression = display.value.trim();
  const mode = document.querySelector('input[name="mode"]:checked').value;

  try {
    let resultBinary = evaluateBinaryExpression(expression);
    let resultText =
      mode === "both"
        ? `${resultBinary} (dec: ${parseInt(resultBinary, 2)})`
        : resultBinary;

    history.push(`${expression} = ${resultText}`);
    updateHistory();

    display.value = resultText;
  } catch (err) {
    display.value = "Error!";
  }
}

function evaluateBinaryExpression(expr) {
  expr = expr.replace(/\s+/g, ""); // remove spaces

  // Handle NOT first
  if (expr.startsWith("not(") && expr.endsWith(")")) {
    const inner = expr.slice(4, -1);
    if (!/^[01]+$/.test(inner)) throw "Invalid binary";
    return [...inner].map((b) => (b === "0" ? "1" : "0")).join("");
  }

  // Match binary1 operator binary2
  const match = expr.match(/^([01]+)(and|or|xor|\+|\-|\*|\/)([01]+)$/);
  if (!match) throw "Invalid expression";

  let [, a, op, b] = match;

  const A = BigInt("0b" + a);
  const B = BigInt("0b" + b);
  let res;

  switch (op) {
    case "+":
      res = A + B;
      break;
    case "-":
      res = A - B;
      break;
    case "*":
      res = A * B;
      break;
    case "/":
      if (B === 0n) throw "Division by zero";
      res = A / B;
      break;
    case "and":
      res = A & B;
      break;
    case "or":
      res = A | B;
      break;
    case "xor":
      res = A ^ B;
      break;
    default:
      throw "Unknown operator";
  }

  return res.toString(2);
}

function updateHistory() {
  const list = document.getElementById("history");
  list.innerHTML = "";
  history.slice(-5).reverse().forEach((op) => {
    const li = document.createElement("li");
    li.textContent = op;
    list.appendChild(li);
  });
}

