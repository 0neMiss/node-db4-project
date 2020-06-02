
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl =>{
      tbl.increments('id');
      tbl.string('name')
        .notNullable();
    })
    .createTable('instructions', tbl =>{
      tbl.increments('id');
      tbl.string('name')
        .notNullable();
    })
    .createTable('ingredients', tbl =>{
      tbl.increments('id');
      tbl.string('name')
        .notNullable();
      tbl.integer('quantity');
    })
    .createTable('recipes_ingredients', tbl =>{
      tbl.increments('id');
      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients');
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
