exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bowling').del()
    .then(function () {
      // Inserts seed entries
      return knex('bowling').insert([
        {id: 43, overs: 48.1, maidens: 10, runs: 150, wickets: 12, average: 12.5, user_id: 3},
        {id: 44, overs: 85.5, maidens: 7, runs: 338, wickets: 23, average: 14.70, user_id: 4},
        {id: 45, overs: 14.4, maidens: 13, runs: 351, wickets: 16, average: 21.94, user_id: 5},
        {id: 47, overs: 11.1, maidens: 3, runs: 39, wickets: 1, average: 39, user_id: 7},
        {id: 50, overs: 40.2, maidens: 5, runs: 144, wickets: 11, average: 13.09, user_id: 10},
        {id: 51, overs: 118.5, maidens: 17, runs: 382, wickets: 39, average: 9.79, user_id: 11}
      ]);
    });
};
