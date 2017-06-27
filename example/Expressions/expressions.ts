var a = [2, 3, 4];
var b = [0, 1, ...a, 5, 6];  //=>[0, 1].concat(a, [5, 6]);

var f: (s: string) => string = function (s) {
    return s.toLowerCase();
};

var X = x => Math.sin(x); //传入x值，返回计算结果

var q = 1;
var p = 2;
[q, p] = [p, q]; //结构赋值

//表达式的东西比较多，但比较简单