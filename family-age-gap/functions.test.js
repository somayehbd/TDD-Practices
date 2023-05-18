const functions = require("./functions");

describe('method: ageGap', () => {
    it('should return [20, 30, 10] when i supply [20, 30]', () => {
        const result = functions.ageGap([20, 30]);
        expect(result).toEqual([20, 30, 10])
    });

    it('should return[10, 40, 30] when i supply [10, 40]', () => {
        const result = functions.ageGap([10, 40]);
        expect(result).toEqual([10, 40, 30])
    });
});