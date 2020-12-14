const calc = (s) => {
  const n = s.match(/(\d+(\.\d+)?)([\*|\+|\-|\/])(\d+(\.\d+)?)/);
  if (!n) {
    return "err";
  }
  const a = parseFloat(n[1]);
  const b = parseFloat(n[4]);
  const op = n[3];
  switch (op) {
    case "*":
      return a * b;
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a/ b;
  }
  return "err";
};

// console.log(calc("0.1+0.2"));

export { calc };
