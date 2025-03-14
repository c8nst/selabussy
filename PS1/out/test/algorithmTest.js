"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = isPrime;
const assert_1 = __importDefault(require("assert"));
/*
 * Testing strategy for toBucketSets():
 *
 * TODO: Describe your testing strategy for toBucketSets() here.
 */
describe("toBucketSets()", () => {
    it("Example test case - replace with your own tests", () => {
        assert_1.default.fail("Replace this test case with your own tests based on your testing strategy");
    });
});
/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
describe("getBucketRange()", () => {
    it("Example test case - replace with your own tests", () => {
        assert_1.default.fail("Replace this test case with your own tests based on your testing strategy");
    });
});
/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
    it("Example test case - replace with your own tests", () => {
        assert_1.default.fail("Replace this test case with your own tests based on your testing strategy");
    });
});
/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
    it("Example test case - replace with your own tests", () => {
        assert_1.default.fail("Replace this test case with your own tests based on your testing strategy");
    });
});
/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
    it("Example test case - replace with your own tests", () => {
        assert_1.default.fail("Replace this test case with your own tests based on your testing strategy");
    });
});
/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
    it("Example test case - replace with your own tests", () => {
        assert_1.default.fail("Replace this test case with your own tests based on your testing strategy");
    });
});
function isPrime(num) {
    if (num < 2)
        return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
assert_1.default.equal(isPrime(12), false);
assert_1.default.equal(isPrime(121), false);
assert_1.default.equal(isPrime(11), true);
assert_1.default.equal(isPrime(1), true);
assert_1.default.equal(isPrime(-1), false);
