System.register(["./log"], function(exports_1) {
    var log_1;
    return {
        setters:[
            function (log_1_1) {
                log_1 = log_1_1;
            }],
        execute: function() {
            log_1.message("hello");
        }
    }
});
//tsc module system main.ts （只需要编译main.ts就行，log.ts在编译时会被引入）
//TypeScript模块支持了ECMAScript6模块，同时兼容CommonJS, AMD，System模块，可以编译成相应模块。 
