function frontTimes(str, n){
   frontLen = 3;
  if (frontLen > str.length) {
    frontLen = str.length;
  }
  front = str.substring(0, frontLen);
  result = '';
  for (x = 0; x < n; x++) {
    result = result + front;
  }
  return result;
}