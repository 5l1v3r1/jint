/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-85.js
 * @description Object.defineProperty will not throw TypeError if name.configurable = false, name.writable = false, name.value = NaN and desc.value = NaN (8.12.9 step 10.a.ii.1)
 */


function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", {
            value: NaN,
            writable: false,
            configurable: false
        });

        Object.defineProperty(obj, "foo", {
            value: NaN,
            writable: false,
            configurable: false
        });

        if (!isNaN(obj.foo)) {
            return false;
        }

        obj.foo = "verifyValue";
        if (obj.foo === "verifyValue") {
            return false;
        }

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && prop === "foo") {
                return false;
            }
        }

        delete obj.foo;
        if (!obj.hasOwnProperty("foo")) {
            return false;
        }

        return true;
    }
runTestCase(testcase);
