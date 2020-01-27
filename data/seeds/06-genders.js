
exports.seed = function(knex) {
  return knex('genders')
    .truncate()
    .then(function () {
      return knex('genders').insert([
        {id: 1, 
          gender: 'Male'},
        {id: 2, 
          gender: 'female'},
        {id: 3, 
          gender: 'other'}
      ]);
    });
};
