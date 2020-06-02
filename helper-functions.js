const db = require('../data/db-config.js');


function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('schemes')
    .where({id})
    .first();
}

function getInstructions(id){
  return db('steps')
    .where({scheme_id: id})
    .orderBy('step_number');

}
