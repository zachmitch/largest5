
function solution(digits){
  
  var currentSequence;
  var max = 0;

  for (let i = 0; i < digits.length - 4; i++) {
    currentSequence = Number(digits.slice(i,i+5));
    currentSequence > max ? max = currentSequence : null;
  }

  return max;
}
