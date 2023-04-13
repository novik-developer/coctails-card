const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes");

const app = express();

// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

const PORT = config.get("port") ?? 8888;

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase();
        });
        await mongoose.connect(config.get("mongoURI"));
        console.log(chalk.green(`connect`));
        app.listen(PORT, () => {
            console.log(chalk.green(`Server is running on port ${PORT}...`));
        });
    } catch (error) {
        console.log(chalk.red(error.message));
        process.exit(1);
    }
}

start();