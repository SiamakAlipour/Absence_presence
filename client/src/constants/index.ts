import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.API || 'http://127.0.0.1:8001/api';

export const GET = 'GET';
export const POST = 'POST';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';
