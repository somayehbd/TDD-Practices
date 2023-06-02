const drawstairs = require('./drawstairs')

describe('DrawStairs', () => {
    it('should return 0 steps if i give it the number 0', () => {
        const result = drawstairs(0);
        expect(result).toBe("",);    
    });

    it('should return 3 steps if i give it the number 3', () => {
        const result = drawstairs(3);
        expect(result).toBe("I\n I\n  I",);
    });        
    
    it('should return 1 steps if i give it the number 1', () => {
        const result = drawstairs(1);
        expect(result).toBe("I",);
    });
});