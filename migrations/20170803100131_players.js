
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.string('nickname')
    table.string('characteristic')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')

};
