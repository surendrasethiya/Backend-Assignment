// server.js
const dotenv = require('dotenv');
const app = require('./app');
const sequelize = require('./db');

// Load environment variables
dotenv.config({ path: './config.env' });

// Test database connection and sync models
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        await sequelize.sync();
        console.log('✅ Database synced.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});