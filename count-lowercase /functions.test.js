const functions = require("./functions");
describe('method: countLowercase', () => {
    it('should return 26 if a-z are given', () => {
        let str = "";
        for (let i = 97; i <= 122; i++)
            str += String.fromCharCode(i);
        const result = functions.countLowercase(str);
        expect(result).toEqual(26)
    });

    it('should return 26 if all ascii characters are supplied', () => {
        let str = "";
        for (let i = 0; i <= 255; i++)
            str += String.fromCharCode(i);
        const result = functions.countLowercase(str);
        expect(result).toEqual(26)
    });
});