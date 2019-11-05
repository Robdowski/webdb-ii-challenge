
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      table.increments()

      table.string('vin').notNullable()
      table.string('make').notNullable()
      table.string('model').notNullable()
      table.integer('milage').notNullable()
      table.string('transmission')
      table.string('title_status')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
