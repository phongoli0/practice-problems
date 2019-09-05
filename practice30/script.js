var arr1 = [1,100,109,97,65,76];

function randomRange (startNum, endNum){
    var answer = Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
    if (Array.isArray(startNum)) {
        answer = startNum[Math.floor(Math.random()* startNum.length)];
    }
    return answer;
}
consoloe.log(randomRange());