const assert = require("chai").assert;
const app = require("../app");

describe("App", function(){
    it("app should reture hello", function(){
        assert.equal(app(), "hello1");
    });
});