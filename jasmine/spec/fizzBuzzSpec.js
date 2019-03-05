describe("fizzbuzz", function() {
  it("returns fizz when given a multiple of 3", function() {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
  });
  it("returns buzz when given a multiple of 5", function() {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
  });
  it("returns fizzbuzz when given a multiple of both 3 and 5", function() {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
  });
  it("returns num when not a multiple of 3 or 5", function() {
    expect(fizzbuzz(23)).toBe(23);
    expect(fizzbuzz(4)).toBe(4);
  });
});
