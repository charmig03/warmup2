function stringSplosion(str){
  result = '';
  for (x = 0; x < str.length - 1; x++) {
    result = result + str.substring(0, x + 1);
  }
  return result;
}