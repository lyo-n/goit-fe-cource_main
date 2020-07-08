const findLongestWord = function(string) {    
  let lines = string.split(" ");
  let longest = 0;
  let wordLongest;
    for (const line of lines){
    let sym = line.length;
    if(longest < sym){
      longest = sym;
      wordLongest=line;
    }
    }
  return wordLongest;
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'



