const express = require("express");
const app = express();
const recordsRoute = require("./routes/records");

app.use(express.json());
app.use("/records", recordsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
