const functions = {
    closestElevator: (left, right, call) => {
        leftDistance = Math.abs(call - left)
        rightDistance = Math.abs(call - right)
        if (leftDistance < rightDistance) {
            return "left"
        }
        return "right"
    }
}

module.exports = functions;