
exports.seed = function(knex) {
  return knex('attendee_types')
    .truncate()
    .then(function () {
      return knex('attendee_types').insert([
        {id: 1, 
          name: 'Athlete', 
          role_id: 2},
        {id: 2, 
          name: 'Parent', 
          role_id: 2},
        {id: 3, 
          name: 'Coach', 
          role_id: 2},
        {id: 4, 
          name: 'Volunteer', 
          role_id: 2}
      ]);
    });
};
