const functions = {
    closestElevator: (left, right, call) => {
        if (call == left)
            return "left"

        if (call == right)
            return "right"

        if (call - 1 == right)
            return "right"
        if (left == right)
            return "right"
    }
}

module.exports = functions;