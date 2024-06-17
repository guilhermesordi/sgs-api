const pgp = require('pg-promise')();
const db = pgp({
  host: process.env.POSTGRES_HOST, 
  database: process.env.POSTGRES_DATABASE, 
  user: process.env.POSTGRES_USER, 
  password: process.env.POSTGRES_PASSWORD,
});

// 'postgresql://postgres:Xt3"vS94qw-1".4t-&@db.vigcjlqbzziogtorkvxz.supabase.co:5432/postgres'

module.exports = {
  db,
};
