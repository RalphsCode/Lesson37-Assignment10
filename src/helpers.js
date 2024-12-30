/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  console.log("in helpers/choice() and am returning:", values[randIdx]);
  return values[randIdx];
}

export { choice };