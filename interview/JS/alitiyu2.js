
const uniq = (arr) => {
  // your code is here
  const set = new Set();
  arr.forEach((item) =>{

    set.add(item);
  })
    
  return Array.from(set);
}

const sourceArr = [299, 544, 'fki', 'lddmn', 'nkdsfl', 453, 453, 'dssl', 565, '3434', 4543, 'snels', 'ldd', 'sl', 'dssl', 3434, 54, 99, '', undefined];

// test
const singleArr = uniq(sourceArr);
console.log(singleArr);