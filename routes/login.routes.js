import { Router } from 'express'
import { findUser } from "../services/user.service.js"


const router = Router()

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    const{ username, password } = req.body 

    findUser(username, (user) => {

        if (!user) [
            res.send('<h1 style = "color: red"> User is not found </h1>')
        ]

        else if (user.password != password) {
            res.send('<h1 style = "color: red"> Username or password is wrong </h1>')
        }
        else {
            let token = `${username}: ${password}`
            res.cookie('token', token)
            res.redirect('/users')
        }
    } )
})



export default router