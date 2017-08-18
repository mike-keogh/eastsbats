
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('playerInnings', t => {
    t.integer('playerInnings_id').primary()
    t.integer('game_table_id')
    t.integer('players_id')
    t.integer('innings_number')
    t.integer('bat_runs')
    t.decimal('bowl_overs')
    t.integer('bowl_runs')
    t.integer('bowl_maidens')
    t.integer('bowl_wickets')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('playerInnings')

};
