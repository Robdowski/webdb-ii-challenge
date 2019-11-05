
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin:'2346da7864xxa12',
          make:'Ford',
          model: 'Mustang',
          milage: 12000,
          transmission: 'Standard',
          title_status: 'Clean'
        },
        {
          vin: '1234adsfdu3145',
          make: 'Honda',
          model: 'Accord',
          milage: 4500,
          transmission: '10-speed Automatic CVT',
          title_status: 'Clean'
        },

      ]);
    });
};
