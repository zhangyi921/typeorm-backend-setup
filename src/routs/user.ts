import {Router} from "express";
import {User} from "../entity/User";
import { getRepository } from 'typeorm';
var router = Router()


router.get('/', async function (req, res) {
    const userRepository = await getRepository(User);
    const users = await userRepository.find();
        res.json(users);
});

export const userRouter = router;
