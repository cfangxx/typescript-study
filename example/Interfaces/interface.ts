interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
//编译后是没有interface这东西的，接口还可以继承接口或类 （这个Java只能是接口）
 
class Clock implements ClockInterface  {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}