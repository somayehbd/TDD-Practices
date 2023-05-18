const functions = {
    ageGap: (arr) => {
        let n1 = arr[0];
        let n2 = arr[1];
        if (n1 < n2)
            return [n1, n2, n2 - n1]
        else
            return [n2, n1, n1 - n2]
    }
}

module.exports = functions;