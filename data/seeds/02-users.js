
exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        {id: 1, 
          role_id: 2, 
          email: 'userA@gmail.com', 
          underage: true, 
          parent_id: null, 
          password: 'abc123'},
        {id: 2, 
          role_id: 2, 
          email: 'userB@gmail.com', 
          underage: true, 
          parent_id: null, 
          password: 'abc123'},
        {id: 3, 
          role_id: 2, 
          email: 'userC@gmail.com', 
          underage: true, 
          parent_id: null, 
          password: 'abc123'}
      ]);
    });
};
