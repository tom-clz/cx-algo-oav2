const bonus = (table) => {
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
      }
    }
  }
  return table;
};

tab = [1, 25, -20, 32, 100, 48];
console.log("result is", bonus(tab));
