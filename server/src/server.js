import express from 'express';
import { ENV } from './lib/env.js';
import { connnectDB } from './lib/db.js';

const app = express();
app.get('/health', async (req, res) => {
  return res.json({
    success: true,
    message: 'hello from server',
  });
});

const startServer = async () => {
  try {
    await connnectDB();
    app.listen(ENV.PORT, () => {
      console.log('Server is running on port:', ENV.PORT);
    });
  } catch (error) {
    console.error('💥 Error Starting the server', error);
  }
};

startServer();
