import { areaOfCircle, getValueAsync, square } from "@/lib/math.util";
import { assert, expect, should as shouldFn } from "chai";

interface TestParameter {
  input: number;
  output: number;
}

const testData: TestParameter[] = [
  {
    input: 7,
    output: 49,
  },
  {
    input: 0,
    output: 0,
  },
  {
    input: -8,
    output: 64,
  },
];

describe("math.util should", () => {
  it("return square of a number", () => {
    const result = square(8);
    assert.equal(result, 64);
  });

  testData.forEach((d) => {
    it(`return the square of ${d.input}`, () => {
      expect(square(d.input)).to.be.equal(d.output);
    });
  });

  it("return square of a number (negative assertion)", () => {
    const result = square(8);
    assert.notEqual(result, 63);
    // expect(result).not.to.be.equal(45);
  });

  it("calculate the area of unit circle", () => {
    const area = areaOfCircle(1);
    assert.equal(area, Math.PI);
  });

  it("calculate the area of a circle", () => {
    const area = areaOfCircle(3.2);
    expect(area).to.be.approximately(32.1699, 0.001);
  });

  it("throw exception for negative radius", () => {
    // assert.throws(() => areaOfCircle(-9), "negative radius is not allowed");

    assert.throws(
      () => areaOfCircle(-9),
      Error,
      "negative radius is not allowed"
    );

    // expect(() => areaOfCircle(-7.8)).throw("negative radius is not allowed");

    //    New API

    // expect(() => areaOfCircle(-7.8)).to.throw(
    //   Error,
    //   "negative radius is not allowed"
    // );
  });

  //  traditional promise based api
  it("resolve the promise in traditional approach", () => {
    return getValueAsync().then((v) => {
      expect(v).to.be.greaterThan(1000);
    });
  });

  //  modern async based api
  it("resolve the promise in modern async approach", async () => {
    const value = await getValueAsync();
    expect(value).to.be.lessThanOrEqual(10000);
  });
});
