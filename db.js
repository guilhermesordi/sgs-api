const pgp = require('pg-promise')();
const db = pgp({
  host: 'db.vigcjlqbzziogtorkvxz.supabase.co', 
  port: '5432', 
  database: 'postgres', 
  user: 'postgres', 
  password: 'Xt3"vS94qw-1".4t-&'
});

// 'postgresql://postgres:Xt3"vS94qw-1".4t-&@db.vigcjlqbzziogtorkvxz.supabase.co:5432/postgres'

module.exports = {
  db,
};
