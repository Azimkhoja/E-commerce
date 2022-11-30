import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import './controllers/contr.js'
import {routes} from './routers/index.router.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
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