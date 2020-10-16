const bubble_sort = (table) => {
  changed = true;
  nb_rounds = 0;
  nb_changes = 0;
  while (changed) {
    changed = false;
    for (let i = 0; i < table.length; i++) {
      if (table[i] > table[i + 1]) {
        second = table[i + 1];
        table[i + 1] = table[i];
        table[i] = second;
        changed = true;
        nb_changes++;
      }
      nb_rounds++;
    }
  }
  console.log("nb changes", nb_changes);
  console.log("nb_round", nb_rounds);
  return table;
};

tab = [3, 20, -7, 32, 10, 14];
console.log("buble sorting tab", tab);
console.log("result is", bubble_sort(tab));
