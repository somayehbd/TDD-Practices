const functions = {
    closestElevator: (left,right,call) => {
        if ( call == left){
            return "left"
        }
        if (call == right)
         return "right"
    }
}

module.exports = functions;