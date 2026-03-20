const express = require('express');
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT;
const diaryRouter = require('./routes/diaryRoutes')



const app = express();

app.use(cors())
app.use(express.json())
app.use('/diary', diaryRouter)

app.listen(port, () => {
    console.log(`Diary listening on port ${port}`);
});
