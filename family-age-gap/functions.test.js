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

    it('should return[20,20,0] when i supply [20,20]', () => {
        const result = functions.ageGap([20,20]);
        expect(result).toEqual([20,20,0])
    });

    it('should return[20,40,20] when i supply [40,20]', () => {
        const result = functions.ageGap([40,20]);
        expect(result).toEqual([20,40,20])
    });

    it('should return[20,22,2] when i supply [20, 21, 22]', () => {
        const result = functions.ageGap([20, 21, 22]);
        expect(result).toEqual([20, 22, 2])
    });

    it('should return[1,50,49] when i supply [2,2 21, 15, 50, 1,2]', () => {
        const result = functions.ageGap([20, 21, 22]);
        expect(result).toEqual([20, 22, 2])
    });

    it('should return[0, 0, 0] when i supply [0, 0]', () => {
        const result = functions.ageGap([0, 0]);
        expect(result).toEqual([0, 0, 0])
    });
});