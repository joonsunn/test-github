import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", async (request: Request, response: Response) => {
    return response.json({ message: "You have reached home route" });
});

app.get("/branch", async (request, response) => {
    return response.json({ message: "You are on branch route" });
});

app.get("/developV2", async (request, response) => {
    return response.json({ message: "You are on develop V2 route" });
});

app.get("/developV3", async (request, response) => {
    return response.json({ message: "You are on develop V3 route" });
});

app.get("/another-new-route", async (request, response) => {
    return response.json({ message: "You are on another new route" });
});

export default app;
