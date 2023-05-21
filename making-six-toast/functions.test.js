const functions = require("./functions");
describe('method:sixToast', () => {
    it('should return 0 toast needed to put in or to take out toaster if i supply (6)', () => {
        const result = functions.sixToast(6);
        expect(result).toEqual(0);
    });
    it('should return 4 toast needed to put in or to take out toaster if i supply (2)', () => {
        const result = functions.sixToast(2);
        expect(result).toEqual(4);
    });
});