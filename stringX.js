function stringX(str){
  result = '';
  front = str.substring(0, 1);
  end = str.substring(str.length - 1);
  for (i = 1; i < str.length - 1; i++) {
    if (str.charAt(i) !== 'x') {
      result += str.charAt(i);
    }
  }
  return front + result + end;
}