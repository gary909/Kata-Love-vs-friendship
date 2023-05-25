function wordsToMarks(string){
    // find ascii val, then remove 96 to find num
    let myArr = [];
    for(let i = 0; i < string.length; i++){
        myArr.push(string.charCodeAt(i) - 96);
    } // then push into array, return summed array:
    return myArr.reduce((partialSum, a) => partialSum + a, 0);
}

console.log(wordsToMarks("attitude")); // 100
console.log(wordsToMarks("friends")); // 75
console.log(wordsToMarks("family")); // 66
console.log(wordsToMarks("selfness")); // 99
console.log(wordsToMarks("knowledge")); // 96