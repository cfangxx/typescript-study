enum Operator {  
    ADD,  
    DIV,  
    MUL,  
    SUB  
}

function compute(op: Operator, a: number, b: number) {  
    console.log("the operator is" + Operator[op]);  
}

var b: boolean = true;

compute(Operator.ADD, 1, 2);
compute(Operator.ADD, 1, b); //编译时error，但能编译成js
