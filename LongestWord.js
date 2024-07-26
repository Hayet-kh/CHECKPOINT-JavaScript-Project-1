/*
    Find the Longest Word: Write a function that takes a string as an argument and returns the length of the longest word in the string.
*/
function findLongestWord(str) {
    let arr = str.split(' ');
    let longest = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return (longest.length);
}
//console.log(findLongestWord("Hello my name is Hayet, The weather is nice")); // 7


/*
    Reverse a String: Write a function that takes a string as input and returns the string reversed.
*/
function reverseString1(str) {
    return str.split(' ').reverse().join(' ');
}
console.log(reverseString1("Hello my name is Hayet, The weather is nice"));

function reverseStringWordLetter(str) {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
//console.log(reverseStringWordLetter("Hello my name is Hayet, The weather is nice"));

function reverseString(str){
    let arr = str.split(' ');
    let reverse = [];
    for (let i = arr.length; i >=0 ; i--) {
        reverse.push(arr[i]);
    }
    return reverse.join(' ');
}
//console.log(reverseString("Hello my name is Hayet, The weather is nice"));