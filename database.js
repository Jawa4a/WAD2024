const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "1122",
    database: "",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        const client = await pool.connect();
        await client.query(query);
        client.release();
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};
// DROP TABLE users;
const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        username VARCHAR(200) NOT NULL UNIQUE,
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

const createPostTblQuery = `
    DROP TABLE IF EXISTS "posts";
    CREATE TABLE "posts" (
        id SERIAL PRIMARY KEY,
        uid INTEGER NOT NULL,
        username VARCHAR(200) NOT NULL,
        created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        likes INTEGER DEFAULT 0,
        body VARCHAR(255) NOT NULL,
        attachments JSON DEFAULT '[]'
    );
`;

const initializeDatabase = async () => {
    console.log("Initializing database...");
    const tablesCreated = await execute(createPostTblQuery);
    if (tablesCreated) {
        console.log("Tables created successfully.");
        await insertPosts();
    } else {
        console.error("Failed to create tables.");
    }
};

initializeDatabase();

module.exports = pool;

// Posts data JSON.
const posts = [
    {
        "postId": 1,
        "uid": 1,
        "username": "Chinchilla",
        "createdTime": "2022-10-23T10:00:00Z",
        "likes":0,
        "body": "Anyone knows if this is the homework for tomorrow?",
        "attachments": [
            {
                "type": "file",
                "url": "./res/docs/homework.pdf",
                "description": "Download PDF"
            }
        ]
    },
    {
        "postId": 2,
        "uid": 2,
        "username": "Tiger",
        "createdTime": "2022-10-22T10:00:00Z",
        "likes":0,
        "body": "Cool gif",
        "attachments": [
            {
                "type": "image",
                "url": "./res/img/gif.gif",
                "description": "Tartu 2022"
            }
        ]
        },
        {
        "postId": 3,
        "uid": 3,
        "username": "Wombat",
        "createdTime": "2022-10-22T10:00:00Z",
        "likes":0,
        "body": "Tartu 2022",
        "attachments": [
            {
                "type": "image",
                "url": "./res/img/tartu2024.jpg",
                "description": "Tartu 2022"
            }
        ]
    },
    {
        "postId": 4,
        "uid": 4,
        "username": "Koala",
        "createdTime": "2022-10-02T10:00:00Z",
        "likes":0,
        "body": "Anyone knows in which room is the lab today?",
        "attachments": []
    },
    {
        "postId": 5,
        "uid": 5,
        "username": "Skunk",
        "createdTime": "2022-10-01T10:00:00Z",
        "likes":0,
        "body": "Yep, it's one of those days! 😅 That face says it all—when the day’s been long, the coffee’s run out, and you just can't handle another bug in the code. Hang in there, buddy, we’ve all been there!",
        "attachments": [
            {
                "type": "image",
                "url": "./res/img/monday.png",
                "description": "Tartu 2022"
            }
        ]
    },
    {
        "postId": 6,
        "uid": 1,
        "username": "Chinchilla",
        "createdTime": "2022-09-28T15:30:00Z",
        "likes":0,
        "body": "Anyone here for the study group later today?",
        "attachments": []
    },
    {
        "postId": 7,
        "uid": 3,
        "username": "Wombat",
        "createdTime": "2022-09-26T09:00:00Z",
        "likes":0,
        "body": "The lab was really insightful this week. The coolest!",
        "attachments": []
    },
    {
        "postId": 8,
        "uid": 6,
        "username": "Owl",
        "createdTime": "2022-09-25T20:45:00Z",
        "likes":0,
        "body": "Anyone else struggling with the project deadline?",
        "attachments": []
    },
    {
        "postId": 9,
        "uid": 7,
        "username": "Lynx",
        "createdTime": "2022-09-24T12:15:00Z",
        "likes":0,
        "body": "Found a cool trick for organizing code in VS Code!",
        "attachments": []
    },
    {
        "postId": 10,
        "uid": 2,
        "username": "Tiger",
        "createdTime": "2022-09-23T08:00:00Z",
        "likes":0,
        "body": "Good luck to everyone on the upcoming exam!",
        "attachments": []
    }
];
// Insert post data into database on server creation.
const insertPosts = async () => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM posts");
        const count = parseInt(result.rows[0].count, 10);

        if (count > 0) {
            console.log("Posts already exist, skipping insertion.");
            return;
        }

        for (const post of posts) {
            const { uid, username, createdTime, likes, body, attachments } = post;
            const query = `INSERT INTO posts (uid, username, created_time, likes, body, attachments) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;
            const values = [uid, username, createdTime, likes, body, JSON.stringify(attachments)];
            const result = await pool.query(query, values);
            console.log(`Inserted post with ID: ${result.rows[0].id}`);
        }
    } catch (error) {
        console.error("Error inserting posts:", error.message);
    }
};

insertPosts();