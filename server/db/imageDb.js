function getImages(knex) {
  return knex("images");
}

module.exports = {
  getImages
};
