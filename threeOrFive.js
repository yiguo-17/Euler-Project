const threeFive = function(max){
  let result = 0;
  for(let i=0; i<max; i++){
    if(i%3===0||i%5===0){
      result += i;
    }
  }
  console.log(result);
  return result
}