const hello = require("hello");
describe("test hello", () => {
    test("works", () => {
        expect(hello.hello()).toEqual("Hello World");
    })
});