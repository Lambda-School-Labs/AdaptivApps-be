
exports.up = function(knex) {
  return knex.schema
  .createTable('roles', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
  })
  .createTable('genders', tbl => {
    tbl.increments();
    tbl.string('gender', 128).notNullable().unique();
  })
  .createTable('disability_groups', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
  })
  .createTable('attendee_types', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique()  
  .createTable('disabilities', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
    tbl.integer('disability_group_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('disability_groupes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')  
  })    
  .createTable('users', tbl => {
    tbl.increments();
    tbl.string('email', 128).notNullable().unique();
    tbl.string('password', 128).notNullable();
    tbl.boolean('underage').notNullable().defaultTo(true);
    tbl.integer('role_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('roles')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')  
    tbl.integer('parent_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')        
  })     
}

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('disabilities')
  .dropTableIfExists('attendee_types')
  .dropTableIfExists('disability_groups')
  .dropTableIfExists('genders')
  .dropTableIfExists('roles')
};
