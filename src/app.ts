import express, { Request, Response, request } from "express";

const app = express();

app.use(express.json());

app.get("/", async (request: Request, response: Response) => {
    return response.json({ message: "You have reached home route" });
});

app.get("/branch", async (request, response) => {
    return response.json({ message: "You are on branch route" });
});

app.get("/develop", async (request, response) => {
    return response.json({ message: "You are on develop route." });
});

export default app;
