import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import TaskRoutes from './routes/tasks'
import './database'
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(TaskRoutes)
console.log('Prueba git')
export default app;
