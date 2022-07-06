function last2(str){
   count = 0;
  if (str.length < 2) {
    return 0;
  }
  end = str.substring(str.length - 2);
  for (x = 0; x < str.length - 2; x++) {
    sub = str.substring(x, x + 2);
    if (sub == end) {
      count++;
    }
  }
  return count;
}