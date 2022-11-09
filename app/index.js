const app = require("express")();

const appid = process.env.APPID || 4000;

app.get("/", (req, res) => res.send(`APP ID: ${appid}`));
app.listen(appid, () => console.log(`listening on ${appid}`));
