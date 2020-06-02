
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cup of flour', quantity: 2},
        {id: 2, name: 'tsp of vanilla', quantity: 4},
        {id: 3, name: '1/2 cup of yeast', quantity: 1}
      ]);
    });
};
