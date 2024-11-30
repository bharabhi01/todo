const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
    cors({
        origin: '*', // Allow all origins (use with caution)
        credentials: true,
    })
);

app.use("/api", routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();