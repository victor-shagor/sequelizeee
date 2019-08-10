require('dotenv').config();

module.exports = {
  development: {
    username: 'victor_shagor',
    password: 'oladimeji',
    database: 'sequelize',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    username: 'victor_shagor',
    password: 'oladimeji',
    database: 'sequelize_test',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};