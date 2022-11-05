import express from "express"
import logger from "morgan"
import cors from "cors"

import indexRouter from "./routes/index"

const app = express();
const port = process.env.PORT || 4200;


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.listen(port, () => {
    console.log("Process has started")
})



