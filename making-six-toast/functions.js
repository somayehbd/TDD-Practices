const functions = {
    sixToast: (num) => {
        if (num < 6)
            return 6 - num
        else
            return num - 6;
    }
}

module.exports = functions;