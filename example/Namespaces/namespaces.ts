namespace A {
    export class X { s: string }
    
}
namespace B {
    
    import Y = A;    // Alias for namespace A
    import Z = A.X;  // Alias for type and value A.X

	export var K = 2;
	export function f(){
		var x = new Z();
	}
}
//变量只有在使用了，才会被生成
//命名空间：为了避免出现同名的变量或函数的冲突。
//import：能将其他命名空间或命名空间的元素引入使用。
//export：能将元素（变量、函数、类等）导出到命名空间上。


