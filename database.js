// database.js
const Pool = require('pg').Pool;

// Database data.
const pool = new Pool({
    user: "postgres",
    password: "1122",
    database: "",
    host: "localhost",
    port: "5432"
});

// Query execution.
const execute = async(query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// Create database if not exists.
// DROP TABLE users;
const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        username VARCHAR(200) NOT NULL UNIQUE,
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('Table "users" is created');
    }
});

module.exports = pool;