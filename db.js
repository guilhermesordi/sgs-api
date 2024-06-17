const pgp = require('pg-promise')();
const db = pgp({
  host: 'aws-0-sa-east-1.pooler.supabase.com',
  database: 'postgres',
  port: '6543',
  user: 'postgres.vigcjlqbzziogtorkvxz',
  password: 'Xt3"vS94qw-1".4t-&'
});

module.exports = {
  db,
};
