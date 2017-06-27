var Operator;
(function (Operator) {
    Operator[Operator["ADD"] = 0] = "ADD";
    Operator[Operator["DIV"] = 1] = "DIV";
    Operator[Operator["MUL"] = 2] = "MUL";
    Operator[Operator["SUB"] = 3] = "SUB";
})(Operator || (Operator = {}));
function compute(op, a, b) {
    console.log("the operator is" + Operator[op]);
}
var b = true;
compute(Operator.ADD, 1, 2);
compute(Operator.ADD, 1, b); //编译时error，但能编译成js
