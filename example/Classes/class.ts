class Point {
    constructor(public x: number, public y: number) { }
    public toString() {
        return "x=" + this.x + " y=" + this.y;
    }
}
class ColoredPoint extends Point {
    constructor(x: number, y: number, public color: string) {
        super(x, y);
    }
    public toString() {
        return super.toString() + " color=" + this.color;
    }
	//static声明静态函数，不加static默认是实例函数
	static f() {
    }

}

//泛型
class Pair<T1, T2> {
    constructor(public item1: T1, public item2: T2) { }
	public toString() {
        return "Pair"+ this.item1.toString() + this.item2.toString();
    }
}

console.log(new Point(1,2).toString());
console.log(new ColoredPoint(1,2,'blue').toString());
console.log(new Pair<Point,ColoredPoint>(new Point(1,2),new ColoredPoint(1,2,'blue')).toString());