const express =  require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

const app = express();


app.use(express.json());
app.use(bodyParser.json());

app.use('/admin', adminRouter);
app.use('/user', userRouter);


app.listen(8000, () => {
    console.log("Server is running")
})