
const functions = {
  power: (x, y) => {
    if (x < 0)
      throw new Error("x must be positive");
    if (y < 0)
      throw new Error("y must be positive");

    if (x == 0 && y == 0)
      return 1;

    let result = 1;
    for (let i = 1; i <= y; i++) {
      result = result * x
    }
    return result;
  }
}
module.exports = functions;