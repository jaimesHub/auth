const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app.js')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    // console.log(con.connections);
    console.log('DB connection successfull!');
})


const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})