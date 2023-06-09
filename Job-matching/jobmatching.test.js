const jobmatching = require('./jobmatching')

describe('Job Matching', () => {

    it('should return true if i give same salary for minSalary,maxSalary', () => {
        const result = jobmatching({minSalary: 1200}, {maxSalary: 1200});
        expect(result).toBe(true);
    });

    it('should return false if i give same salary for minSalary,maxSalary', () => {
        const result = jobmatching({minSalary: 1300}, {maxSalary: 800});
        expect(result).toBe(false);
    });

    it('should return error if i give 0 salary for minSalary,maxSalary', () => {

        expect(() => {
            jobmatching({minSalary: 0}, {maxSalary: 0});
        }).toThrow('candidateor or job can not be zero')
    });

});
