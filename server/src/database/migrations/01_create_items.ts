import Knex from 'knex';

export async function up(knex: Knex) {
  // Ações que criam
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export async function down(knex: Knex) {
  // Ações que revertem as da fx UP
  return knex.schema.dropTable('items');
}
