function altPairs(str){
  result = '';
  for (x = 0; x < str.length; x += 4) {
    end = x + 2;
    if (end > str.length) {
      end = str.length;
    }
    result = result + str.substring(x, end);
  }
  return result;
}