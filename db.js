// db.js
import 'dotenv/config'
import { neon } from "@neondatabase/serverless"

//import postgres from 'postgres'

//const http = require("http");
//const { neon } = require("@neondatabase/serverless");
export const sql = neon(process.env.DATABASE_URL);