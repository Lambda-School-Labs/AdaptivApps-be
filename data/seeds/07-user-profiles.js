
exports.seed = function(knex) {
  return knex('user_profiles')
    .truncate()
    .then(function () {
      return knex('user_profiles').insert([
        {id: 1, 
          username: 'NewGuyA', 
          firstname: 'New', 
          lastname: 'Guy', 
          disability_id: 0, 
          gender_id: 1, 
          dob: 01/20/1991, 
          bio: 'I am one of the first users in this app!!'},
        {id: 2, 
          username: 'NewGuyA', 
          firstname: 'New', 
          lastname: 'Guy', 
          disability_id: 0, 
          gender_id: 1, 
          dob: 01/20/1992, 
          bio: 'I am one of the first users in this app!!'},
        {id: 3, 
          username: 'NewGuyA', 
          firstname: 'New', 
          lastname: 'Guy', 
          disability_id: 0, 
          gender_id: 1, 
          dob: 01/20/1993, 
          bio: 'I am one of the first users in this app!!'}
      ]);
    });
};
