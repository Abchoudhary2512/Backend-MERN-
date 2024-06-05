const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express()
const port = 5500

// Set Templating Engine
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// In-memory storage for users
const users = []

// Navigation
app.get('', (req, res) => {
    res.render('index')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', urlencodedParser, [
    check('username', 'This username must be 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const alert = errors.array()
        res.render('register', {
            alert
        })
    } else {
        const { username, email } = req.body

        // Check if user already exists
        const userExists = users.find(user => user.email === email)
        if (userExists) {
            res.render('register', {
                alert: [{ msg: 'User already exists' }]
            })
        } else {
            // Register new user
            users.push({ username, email })
            res.render('register', {
                alert: [{ msg: 'User registered successfully' }]
            })
        }
    }
})

app.listen(port, () => console.info(`App listening on port: ${port}`))
