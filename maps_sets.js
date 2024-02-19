// Quick Question #1
new Set([1,1,2,2,3,4]) // Set(4) {1, 2, 3, 4}

// Quick Question #2
[...new Set("referee")].join("") // ref

// Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// {[1,2,3] => true, [1,2,3] => false}

// hasDuplicate
function hasDuplicate(arr) {
    let newSet = new Set(arr);
    return arr.length !== newSet.size;
}

// vowelCount
function vowel(letter) {
    const allVowels = 'aeiou';
    return allVowels.includes(letter); // checks if given letter is a vowel
}

function vowelCount(str) {
    let myMap = new Map();
    for(let letter of str){
        let lowerCase = letter.toLowerCase();
        if(vowel(lowerCase)){ // if letter is vowel, it goes to the if, else check
          if(myMap.has(lowerCase)){ // if already in map, value is iterated
            vowelMap.set(lowerCase, myMap.get(lowerCase) + 1);
          } else {
            myMap.set(lowerCase, 1); // otherwise set to 1
          }
        }
      }
      return myMap;
}
