import path from "path";
import * as url from "url";
import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server started"));
const items = ["Laptop", "Desktop"];
app.get("/api/items", (req, res) => {
    res.send(items);
});
app.use(express.static("dist"));
app.get('*', (req, res) => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    res.sendFile(path.join(__dirname, 'index.html'));
});