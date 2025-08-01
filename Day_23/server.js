const express = require("express");
const app = express();

const routes = require("./routes/routes");

app.use(express.json());

app.use("/api", routes);


app.get("/", (req, res) => res.send("🚀 API running"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
