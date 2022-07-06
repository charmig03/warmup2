function countXX(str){
  count = 0;
  for (x = 0; x < str.length; x++) {
    if (str.charAt(x) == 'x') {
      if (str.charAt(x + 1) == 'x') {
        count++;
      }
    }
  }
  return count++;
}