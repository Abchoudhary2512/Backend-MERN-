const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Basic route for form submission
app.post('/submit', 
  [
    // Validation rules
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('email').isEmail().withMessage('Must be a valid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('Form submitted successfully!');
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
