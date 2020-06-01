for (let x = 10; x > 0; x -= 1) {
  if (x % 2 == 0) {
    break;
  }
  console.log(x);
}
for (let x = 1; x <= 10; x += 1) {
  if (x % 2 == 0) {
    continue;
  }
  console.log(x);
}
