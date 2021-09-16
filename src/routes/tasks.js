import {Router} from 'express'
import {getTasks, getTask, addTask, deleteTask, updateTask} from '../controllers/task'
const ruta = Router();

ruta.get("/tasks", getTasks)
ruta.get("/tasks/:id", getTask)
ruta.post("/tasks", addTask)
ruta.delete("/tasks/:id", deleteTask)
ruta.put("/tasks/:id", updateTask)


export default ruta;