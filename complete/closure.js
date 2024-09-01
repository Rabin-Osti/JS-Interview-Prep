function counter() {
  let count = 0;
  function inc() {
    count++;
    console.log("count: ", count);
  }
  function dec() {
    count--;
    console.log("count: ", count);
  }
  return { inc, dec };
}
const { inc, dec } = counter();
