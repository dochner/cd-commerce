import { assert, expect, test, describe } from "vitest";

const isTest = import.meta.env.NODE_ENV === "test";

describe.skip("basic tests", () => {
  test("Math.sqrt", () => {
    expect(Math.sqrt(4)).toBe(2);
    expect(Math.sqrt(144)).toBe(12);
    expect(Math.sqrt(2)).toBe(Math.SQRT2);
  });

  test.skipIf(isTest)("JSON", () => {
    const input = {
      foo: "hello",
      bar: "world",
    };

    const output = JSON.stringify(input);

    expect(output).eq('{"foo":"hello","bar":"world"}');
    assert.deepEqual(JSON.parse(output), input, "Matches original");
  });
});
