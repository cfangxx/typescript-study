//编译后是没有interface这东西的，接口还可以继承接口或类 （这个Java只能是接口）
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
