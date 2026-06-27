import express from 'express';
import { ENV } from './lib/env.js';
import { connnectDB } from './lib/db.js';
import cors from 'cors';
import { serve } from "inngest/express";
import { inngest, functions } from './lib/inngest.js';
import path from "path"

const app = express();

const __dirname = path.resolve();

//middlewares
app.use(express.json());

//cors
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);

// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));

app.get('/health', async (req, res) => {
  return res.json({
    success: true,
    message: 'hello from server',
  });
});

//make our app for deployment ready
const frontendPath = path.join(__dirname, "../client/dist");

if (ENV.NODE_ENV === "production") {
    app.use(express.static(frontendPath));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(frontendPath, "index.html"));
    });
}

console.log({
    cwd: process.cwd(),
    dirname: __dirname,
    nodeEnv: ENV.NODE_ENV,
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
