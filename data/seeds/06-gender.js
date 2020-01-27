
exports.seed = function(knex) {
  return knex('gender')
    .truncate()
    .then(function () {
      return knex('gender').insert([
        {id: 1, 
          gender: 'Male'},
        {id: 2, 
          gender: 'female'},
        {id: 3, 
          gender: 'other'}
      ]);
    });
};
