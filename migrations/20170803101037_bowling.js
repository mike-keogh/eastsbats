
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bowling', function(table) {
    table.increments('id').primary()
    table.decimal('overs')
    table.integer('maidens')
    table.integer('runs')
    table.integer('wickets')
    table.decimal('average')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bowling')

};
