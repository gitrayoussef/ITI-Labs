function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  for (let appleDistance of apples) {
    let d = a + appleDistance;
    if (d >= s && d <= t) {
      appleCount = appleCount + 1;
    } else {
      appleCount;
    }
  }
  for (let orangeDistance of oranges) {
    let d = b + orangeDistance;
    if (d >= s && d <= t) {
      orangeCount = orangeCount + 1;
    } else {
      orangeCount;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])
