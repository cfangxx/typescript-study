//默认值
function strange(x, y, z) {
    if (y === void 0) { y = 2; }
    if (z === void 0) { z = x + y; }
    return z;
}
console.log(strange(1));
console.log(strange(3, 2, 1));
//解构参数
function drawText(_a) {
    var _b = _a.text, text = _b === void 0 ? "" : _b, _c = _a.location, _d = _c === void 0 ? [0, 0] : _c, x = _d[0], y = _d[1], _e = _a.bold, bold = _e === void 0 ? false : _e;
    return text + ":" + x + y + ":" + bold;
}
console.log(drawText({ text: 'lu', location: [1, 2], bold: true }));
function pick(x) {
    if (typeof x == "string") {
        return x + "string";
    }
    else if (typeof x == "number") {
        return x + 10000;
    }
}
console.log(pick("lu"));
console.log(pick(1));
