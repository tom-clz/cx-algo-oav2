const insert_sort = (table) => {
  for (let i = 1; i < table.length; i++) {
    x = table[i];
    let j = i;
    while (j > 0 && table[j - 1] > x) {
      table[j] = table[j - 1];
      j--;
    }
    table[j] = x;
  }
  return table;
};

console.log(insert_sort([3, 20, -7, 32, 10, 14]));
