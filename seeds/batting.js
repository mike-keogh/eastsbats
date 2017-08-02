exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('batting').del()
    .then(function () {
      // Inserts seed entries
      return knex('batting').insert([
        {id: 21, innings: 11, runs: 396, average: 39.60, hs: 0, no: 1, user_id: 1},
        {id: 22, innings: 14, runs: 226, average: 16.14, hs: 0, no: 0, user_id: 2},
        {id: 23, innings: 10, runs: 77, average: 9.62, hs: 0, no: 2, user_id: 3},
        {id: 24, innings: 14, runs: 330, average: 33, hs: 0, no: 3, user_id: 4},
        {id: 25, innings: 8, runs: 51, average: 6.37, hs: 0, no: 0, user_id: 5},
        {id: 26, innings: 11, runs: 279, average: 25.36, hs: 0, no: 0, user_id: 6},
        {id: 27, innings: 15, runs: 360, average: 25.71, hs: 0, no: 1, user_id: 7},
        {id: 28, innings: 13, runs: 115, average: 8.84, hs: 0, no: 0, user_id: 8},
        {id: 29, innings: 8, runs: 174, average: 24.85, hs: 0, no: 1, user_id: 9},
        {id: 30, innings: 13, runs: 170, average: 18.88, hs: 0, no: 4, user_id: 10},
        {id: 31, innings: 8, runs: 55, average: 7.85, hs: 0, no: 1, user_id: 11}
      ]);
    });
};
