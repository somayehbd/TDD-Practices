const functions = require('./functions');
describe('method:power', () => {

    it('should return 0 if i supply (0,0)', () => {
        const result = functions.power(0, 0)
        expect(result).toEqual(1)
    });
    it('should return 4 if i supply (2,2)', () => {
        const result = functions.power(2, 2)
        expect(result).toEqual(4)
    });
    it('should return 1 if i supply (1,2)', () => {
        const result = functions.power(1, 2)
        expect(result).toEqual(1)
    });
    it('should return 16 if i supply (4,2)', () => {
        const result = functions.power(4, 2)
        expect(result).toEqual(16)
    });
    it('should throw exception if i supply negetive argument for x', () => {
        const t = () => {
            functions.power(-1, 1)
        };
        expect(t).toThrow(Error);
        expect(t).toThrow("x must be positive");
    });

    it('should throw exception if i supply negetive argument for y (1,-1)', () => {
        const t = () => {
            functions.power(1, -1)
        };
        expect(t).toThrow(Error);
        expect(t).toThrow("y must be positive")
    });
});