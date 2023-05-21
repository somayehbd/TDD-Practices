const functions=require("./functions")
describe('method:closestElevator', () => {
    it('should return "left" if the left elevator is closer to the call ' ,()=>{
        const result=functions.closestElevator(0,2,0);
        expect (result).toEqual("left")
    });

    it('should return "left" if the left elevator is closer to the call ' ,()=>{
        const result=functions.closestElevator(1,2,0);
        expect (result).toEqual("left")
    });

    it('should return "left" if the left elevator is closer to the call ' ,()=>{
        const result=functions.closestElevator(1,0,2);
        expect (result).toEqual("left")
    });

    it('should return "right" if the right elevator is closer to the call ' ,()=>{
        const result=functions.closestElevator(2,0,0);
        expect (result).toEqual("right")
    });

    it('should return "right" if the right elevator is closer to the call ' ,()=>{
        const result=functions.closestElevator(2,1,0);
        expect (result).toEqual("right")
    });

    it('should return "right" if the right elevator is closer to the call ' ,()=>{
        const result=functions.closestElevator(0,1,2);
        expect (result).toEqual("right")
    });
});