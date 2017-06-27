//默认值
function strange(x: number, y = 2, z = x + y) {
    return z;
}
console.log(strange(1));
console.log(strange(3,2,1));

//解构参数
function drawText({ text = "", location: [x, y] = [0, 0], bold = false }) {
   return text + ":" +  x + y +":" + bold;
}
console.log(drawText({text:'lu',location:[1,2], bold:true}));

//函数重载
function pick(x: string): string;
function pick(x: number): string;
function pick(x): any {    
    if (typeof x == "string") {        
        return x + "string";
    }    
    else if (typeof x == "number") {        
        return x + 10000;
    }
}
console.log(pick("lu"));
console.log(pick(1));