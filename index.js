function test1(strouk1, strouk2) {
  if (strouk1.length !== strouk2.length) return "не анаграмма";
  for (let i = 0; i < strouk1.length; i++) {
    if (!test2(strouk1[i], strouk2)) return "не анаграмма";
  }
  return "анаграмма";
}

function test2(letter, strouk2) {
  for (let i = 0; i < strouk2.length; i++) {
    if (strouk2[i] === letter) return true;
  }
  return false;
}
