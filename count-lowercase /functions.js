const functions = {
    countLowercase: (input) => {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            const asciiCode = input[i].charCodeAt();
            if (asciiCode >= 97 && asciiCode <= 122) {
                count++;
            }
        }

        return count;
    }
}

module.exports = functions;