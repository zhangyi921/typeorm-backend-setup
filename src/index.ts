import * as express from "express";
import {Request, Response} from "express";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {authenticateToken} from './middleware/authenticateToken'

import {loginRouter} from './routs/login'
import {userRouter} from './routs/user'
// create typeorm connection
createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    // create and setup express app
    const app = express();
    app.use(express.json());
    

    app.use('/login', loginRouter);
    app.use('/user', authenticateToken, userRouter);
    // register routes

    // app.get("/users", authenticateToken, async function(req: Request, res: Response) {
    //     console.log(req.user)
    //     const users = await userRepository.find();
    //     res.json(users);
    // });

    // app.get("/users/:id", async function(req: Request, res: Response) {
    //     const results = await userRepository.findOne(req.params.id).catch(err=>{res.json(err)});
    //     return res.send(results);
    // });

    // app.post("/users", async function(req: Request, res: Response) {
    //     const user = await userRepository.create(req.body);
    //     const results = await userRepository.save(user);
    //     return res.send(results);
    // });

    // app.put("/users/:id", async function(req: Request, res: Response) {
    //     const user = await userRepository.findOne(req.params.id);
    //     userRepository.merge(user, req.body);
    //     const results = await userRepository.save(user);
    //     return res.send(results);
    // });

    // app.delete("/users/:id", async function(req: Request, res: Response) {
    //     const results = await userRepository.delete(req.params.id);
    //     return res.send(results);
    // });

    // start express server
    app.listen(3000);
});