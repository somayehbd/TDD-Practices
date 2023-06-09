function drawstairs(n) {
    if (n == 0)
        return ""

    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            result += " ";
        }
        if (i != n)
            result = result + "I\n";
        else
            result = result+"I"

    }
    return result;
}
module.exports = drawstairs;