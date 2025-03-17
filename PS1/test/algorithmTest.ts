import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
  isPrime,
} from "../src/algorithm";


describe("isPrime()", () => {
  it("Is 8 prime? - should return false", () => {
    const num: number = 8;
    assert.equal(isPrime(num), false);
  });
  it("Is -1 prime? - should return false", () => {
    const num: number = 0;
    assert.equal(isPrime(num), false);
  });
  it("Is max int prime? - should return false", () => {
    const num: number = Number.MAX_VALUE;
    assert.equal(isPrime(num), false);
  });
  it("Is min int prime - should return false", () => {
    const num: number = Number.MIN_VALUE;
    assert.equal(isPrime(num), false);
  });
  it("Is 0 prime? - should return false", () => {
    const num: number = 0;
    assert.equal(isPrime(num), false);
  });
});




/*
 * Testing strategy for toBucketSets():
 *
 * TODO: Describe your testing strategy for toBucketSets() here.
 */
describe("toBucketSets()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
describe("getBucketRange()", () => {
  it("Range of empty bucket - should return undefined", () => {
    const bucket: Array<Set<Flashcard>> = [];
    assert.equal(getBucketRange(bucket), undefined);
  });
  it("Range of bucket with one set of one flashcard - should return 1, 1", () => {
    const flashcard : Flashcard = {
      front: "hello",
      back: "world",
      hint: "hint",
      tags: []};
    const flashSet : Set<Flashcard> = new Set([flashcard]);
    const bucket: Array<Set<Flashcard>> = [flashSet];
    assert.deepEqual(getBucketRange(bucket), { minBucket: 1, maxBucket: 1 });
  });
  it("Range of bucket with one one long and one short flashcard sets - should return 1, 2", () => {
    const flashcard1 : Flashcard = {
      front: "hello",
      back: "world",
      hint: "hint",
      tags: []};
      const flashcard2 : Flashcard = {
        front: "hello",
        back: "world",
        hint: "hint",
        tags: []};
    const flashSet1 : Set<Flashcard> = new Set([flashcard1, flashcard2]);
    const flashSet2: Set<Flashcard> = new Set([flashcard1]);
    const bucket: Array<Set<Flashcard>> = [flashSet1, flashSet2];
    assert.deepEqual(getBucketRange(bucket), { minBucket: 1, maxBucket: 2});
  });
  it("Range of bucket with one long and one short flashcard sets - should return 1, 2", () => {
    const flashcard1 : Flashcard = {
      front: "hello",
      back: "world",
      hint: "hint",
      tags: []};
      const flashcard2 : Flashcard = {
        front: "hello",
        back: "world",
        hint: "hint",
        tags: []};
    const flashSet1 : Set<Flashcard> = new Set([flashcard1, flashcard2]);
    const flashSet2: Set<Flashcard> = new Set([flashcard1]);
    const bucket: Array<Set<Flashcard>> = [flashSet1, flashSet2];
    assert.deepEqual(getBucketRange(bucket), { minBucket: 1, maxBucket: 2});
  });
    it("Range of bucket with one long and one empty flashcard sets - should return 1, 2", () => {
      const flashcard1 : Flashcard = {
        front: "hello",
        back: "world",
        hint: "hint",
        tags: []};
        const flashcard2 : Flashcard = {
          front: "hello",
          back: "world",
          hint: "hint",
          tags: []};
      const flashSet1 : Set<Flashcard> = new Set([flashcard1, flashcard2]);
      const flashSet2: Set<Flashcard> = new Set([]);
      const bucket: Array<Set<Flashcard>> = [flashSet1, flashSet2];
      assert.deepEqual(getBucketRange(bucket), { minBucket: 2, maxBucket: 2});
  });
});

/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});
