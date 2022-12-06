const  express = require('express')
const  dotenv = require('dotenv')
const  mongoose =require('mongoose');
const  routes = require('./routers/index.router.js')
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(routes)
    async function go(){
        try {
            await mongoose.connect(`mongodb://localhost:27017/e-commerce`)
            app.listen(PORT, () => {
            console.log(`server rinning on ${PORT}`);
            })
        } catch (error) {
            console.log(error.message);            
        }
    }
go()