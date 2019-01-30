const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from bellydrum!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
