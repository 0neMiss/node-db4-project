
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'macncheese'},
        {id: 2, name: 'mashed potatoes'},
        {id: 3, name: 'spaghetti'}
      ]);
    });
};
