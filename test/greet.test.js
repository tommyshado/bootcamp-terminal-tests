import assert from "assert"
import greet from "../functions/greet.js";


describe("The GREET function", () => {
    it("should be able to greet Alan", () => {
        assert.equal("Hello, Alan", greet("Alan"));
    });
    it("should be able to greet Anele", () => {
        assert.equal("Hello, Anele", greet("Anele"));
    });
});