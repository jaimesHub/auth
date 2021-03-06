const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.status(200).send('Hello from server side!!!');
    res.status(200).json({ message: 'Hello from server side!', app: 'Natours' });
})

const port = 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})

module.exports = app;