
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.string('nickname')
    table.string('batting_style')
    table.string('bowling_style')
    table.integer('age')
    table.string('born')
    table.string('teams')
    table.string('playing_role')
    table.string('image')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')

};
