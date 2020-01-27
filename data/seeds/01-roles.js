
exports.seed = function(knex) {
  return knex('roles')
    .truncate()
    .then(function () {
      return knex('roles').insert([
        {id: 1, 
          name: 'Admin'},
        {id: 2, 
          name: 'User'}
      ]);
    });
};
