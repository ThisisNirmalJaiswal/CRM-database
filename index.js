const express = require("express");
const route = require("./src/routes/route");
const app = express();

app.use(express.json());


app.use("/", route);

app.listen(3000, () => {
    console.log("Your app is running on " +3000);
});


