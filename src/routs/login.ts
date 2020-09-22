import {Router} from "express";
import * as jwt from 'jsonwebtoken'
var router = Router()


router.post('/', async function (req, res) {
    res.json({
        token: jwt.sign({userid: 1, role: 'admin'}, '123', { expiresIn: '7200s' })
    })
});

export const loginRouter = router;
