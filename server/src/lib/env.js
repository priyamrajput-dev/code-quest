import dotenv from "dotenv"
dotenv.config({quiet: true})

export const ENV = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV:process.env.NODE_ENV,
    CLIENT_URL:process.env.CLIENT_URL,
    INGEST_SIGNING_KEY:process.env.INGEST_SIGNING_KEY,
    INGEST_EVENT_KEY:process.env.INGEST_EVENT_KEY,
    STREAM_API_KEY:process.env.STREAM_API_KEY,
    STREAM_API_SECRET:process.env.STREAM_API_SECRET
}