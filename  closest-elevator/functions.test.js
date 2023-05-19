const functions=require("./functions")
describe('method:closestElevator', () => {
    it('should return "left" if the left elevator is closer to the call ' ,()=>{
        const result=functions.closestElevator(0,1,0);
        expect (result).toEqual("left")
    });
    
    it('should return "right" if the right elevator is closer to the call ' ,()=>{
        const result=functions.closestElevator(0,1,1);
        expect (result).toEqual("right")
    })
});