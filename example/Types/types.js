var b; // 所有JavaScript值
var c; // Same as c: any
var a; // 显式类型
var d;
var e;
var f = ["hello", "world"]; //数组类型
var g = [3, "three"]; //元组类型
var h; //联合类型，几个不同的类型之中的一个
function k() {
    alert('hi man');
}
//所有类型都是any类型的子类型，其他类型被分成元类型(primitive types)和对象类型(object types)
//元类型包括 number, boolean, string, null, undefined
//对象类型为所有类、模块、接口和字面量类型； 
