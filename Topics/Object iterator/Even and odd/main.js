function sumTheArrays(naturalNumbers) {
  const {even, odd} = naturalNumbers;
  return Object.keys(even).map(i => even[i] + odd[i]);
}
