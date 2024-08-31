//substring
if (word_a[i] === word_b[j]) {
  dp_table[i][j] = dp_table[i - 1][j - 1] + 1;
} else {
  dp_table[i][j] = 0;
}

//subsequence
if (word_a[i] === word_b[j]) {
  dp_table[i][j] = dp_table[i - 1][j - 1] + 1;
} else {
  dp_table[i][j] = Math.max(dp_table[i - 1][j], dp_table[i][j - 1]);
}
