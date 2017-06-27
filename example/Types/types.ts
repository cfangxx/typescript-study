var b: any;             // 所有JavaScript值
var c;                  // Same as c: any
var a: number;			// 显式类型
var d: boolean; 
var e: string;   
var f: string[] = ["hello", "world"];    //数组类型
var g: [number, string] = [3, "three"];  //元组类型
var h: string | number; //联合类型，几个不同的类型之中的一个

function k() : void{  //void是any的子类型，是undefined的超类型，与其他类型无关
	alert('hi man');
}

//所有类型都是any类型的子类型，其他类型被分成元类型(primitive types)和对象类型(object types)
//元类型包括 number, boolean, string, null, undefined
//对象类型为所有类、模块、接口和字面量类型；