// run: node components/effects/count-format.check.ts
import assert from "node:assert/strict";
import { dienSo } from "./count-format.ts";

assert.equal(dienSo("137/150", 1), "137/150");
assert.equal(dienSo("137/150", 0.5), "69/75");
assert.equal(dienSo("9.5-9.5-9.7", 0), "0.0-0.0-0.0");
assert.equal(dienSo("9.5-9.5-9.7", 1), "9.5-9.5-9.7");
assert.equal(dienSo("1570", 0.1), "157");
assert.equal(dienSo("Second Prize", 0.5), "Second Prize");
// the last frame must be the exact source text, whatever its format
assert.equal(dienSo("1,000", 1), "1,000");
assert.equal(dienSo("007", 1), "007");
console.log("dienSo ok");
