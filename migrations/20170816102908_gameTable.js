
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', t => {
    t.increments('game_id').primary()
    t.string('season')
    t.date('date')
    t.string('opponent')
    t.string('location')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game')
};
