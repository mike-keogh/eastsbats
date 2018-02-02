exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("images", t => {
    t.integer("image_id");
    t.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("images");
};
