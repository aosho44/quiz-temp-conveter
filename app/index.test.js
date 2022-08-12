import tryConvert from "./index.js";

describe("tryConvert", () => {
  it("converts to celsius", () => {
    const temp = 50;
    const conversion = "toCelsius";
    const expected = "10";

    const result = tryConvert(temp, conversion);
    expect(result).toBe(expected);
  });

  it("converts to fahrenheit", () => {
    const temp = 100;
    const conversion = "toFahrenheit";
    const expected = "212";

    const result = tryConvert(temp, conversion);
    expect(result).toBe(expected);
  });

  it("returns blank", () => {
    const temp = "abc";
    const conversion = "toFahrenheit";

    const result = tryConvert(temp, conversion);
    expect(result).toBe("");
  });

  it("my answer", () => {
    expect(tryConvert(50, "toCelsius")).toBe("10");
  });
});
