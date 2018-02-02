exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        { image_id: 1, image: "/images/chanelling_trent_boult.jpg" },
        { image_id: 2, image: "/images/post_match_banter.jpg" },
        { image_id: 3, image: "/images/post-match_byc.jpg" },
        {
          image_id: 4,
          image: "/images/technical_application_par_excellence.jpg"
        },
        { image_id: 5, image: "/images/waiting_for_an_edge.jpg" }
      ]);
    });
};
