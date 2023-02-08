// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace 
// the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


let result = [];

for (let i = 0; i < Math.ceil(str.length/2); i++){
  let s = '';
  for (let j = 0; j < 2; j++){
    s += str.charAt(2*i  + j)
  }
  if(result[1]){
    result.push(s)
  } else {
    s+= '_'
    result.push()
  }

}
  return result
