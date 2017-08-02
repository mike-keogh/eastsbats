
exports.up = function(knex, Promise) {
  return knex.schema.createTable('batting', function(table) {
    table.increments('id').primary()
    table.integer('innings')
    table.integer('runs')
    table.decimal('average')
    table.integer('hs')
    table.integer('no')
    table.integer('user_id')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('batting')
};
