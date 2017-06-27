var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return "x=" + this.x + " y=" + this.y;
    };
    return Point;
}());
var ColoredPoint = (function (_super) {
    __extends(ColoredPoint, _super);
    function ColoredPoint(x, y, color) {
        var _this = _super.call(this, x, y) || this;
        _this.color = color;
        return _this;
    }
    ColoredPoint.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " color=" + this.color;
    };
    //static声明静态函数，不加static默认是实例函数
    ColoredPoint.f = function () {
    };
    return ColoredPoint;
}(Point));
//泛型
var Pair = (function () {
    function Pair(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    Pair.prototype.toString = function () {
        return "Pair" + this.item1.toString() + this.item2.toString();
    };
    return Pair;
}());
console.log(new Point(1, 2).toString());
console.log(new ColoredPoint(1, 2, 'blue').toString());
console.log(new Pair(new Point(1, 2), new ColoredPoint(1, 2, 'blue')).toString());
