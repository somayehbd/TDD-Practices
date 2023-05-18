const functions = {
    ageGap: (arr) => {
        let result=[];
        let n1 = arr[0];
        let n2 = arr[1];
        return [n1,n2,n2-n1]
    }
}

module.exports = functions;