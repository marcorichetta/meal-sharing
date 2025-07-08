import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import knex from "./database_client.js";
import nestedRouter from "./routers/nested.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiRouter = express.Router();

// You can delete this route once you add your own routes
apiRouter.get("/", async (req, res) => {
	const CHECK_QUERY = "SELECT 1;";
	try {
		await knex.raw(CHECK_QUERY);
		res.status(200).json({ message: "API can make queries to the database" });
	} catch (error) {
		console.error("Database check failed:", error);
		res.status(500).json({ message: "Database check failed", error: error.message });
	}
});

// This nested router example can also be replaced with your own sub-router
apiRouter.use("/nested", nestedRouter);

app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
	console.log(`API listening on port ${process.env.PORT}`);
});
