import express from "express"
import logger from "morgan"
import cors from "cors"

import indexRouter from "./routes/index"

const app = express();
const port = process.env.PORT || 4200;


app.use(cors())
app.use(logger('dev'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.listen(port, () => {
    console.log("Process has started")
})



