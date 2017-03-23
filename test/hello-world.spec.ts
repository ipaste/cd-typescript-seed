import { sayHello } from "../src/hello-world";

describe("say hello", function () {
    it("passing a name", function () {
        expect(sayHello("Syncfusion")).toBe("Hello Syncfusion");
    })

});