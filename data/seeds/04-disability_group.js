
exports.seed = function(knex) {
  return knex('disability_group')
    .truncate()
    .then(function () {
      return knex('disability_group').insert([
        {id: 1, 
          name: 'Impaired Muscle Power'},
        {id: 2, 
          name: 'Impaired Passive Range of Motion'},
        {id: 3, 
          name: 'Limb Deficiency'},
        {id: 4, 
          name: 'Leg Length Difference'},
        {id: 5, 
          name: 'Short Stature'},
        {id: 6, 
          name: 'Hypertonia'},
        {id: 7, 
          name: 'Ataxia'},
        {id: 8, 
          name: 'Athetosis'},
        {id: 9, 
          name: 'Vision Impairment'},
        {id: 10, 
          name: 'Intellectual Impairment'},
        {id: 11, 
          name: 'I do not have a disability'}
      ]);
    });
};
