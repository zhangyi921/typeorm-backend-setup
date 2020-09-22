import * as jwt from 'jsonwebtoken'

export const authenticateToken = async function (req, res, next) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

    jwt.verify(token, '123', (err: any, user: any) => {
        if (err) return res.status(403).json(err)
        req.user = user
        next() // pass the execution off to whatever request the client intended
    })
}