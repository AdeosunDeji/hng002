import express from "express";
import cors from "cors";
import { errorResponse, handleError, } from "./utils/responses";
import { AOP, IUser, IUser2 } from "./utils/interface";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    const details: IUser = {
      slackUsername: "Adeosun Deji",
      backend: true,
      age: 26,
      bio: "I'm a Backend dev(Nodejs). When i'm not coding, I love playing video games and playing football. My tech journey has been amazing so far vand i just want to keep doing my best so i can be a world class develpoer."
    };
    return res.json(details);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, "server error..");
  }
});

app.post("/", (req, res) => {
  try {
    const { x, y, operation_type }:AOP = req.body;
    if (!operation_type || !x || !y) {
      return errorResponse(res, 400, "you have input an invalid input");
    }
    const X = Number(x);
    const Y = Number(y);
    let result;
    if (operation_type === "addition") {
      result = X + Y;
    } else if (operation_type === "multiplication") {
      result = X * Y;
    } else if (operation_type === "subtraction") {
      result = X - Y;
    } else {
      return errorResponse(res, 400, "Invalid operation");
    }
    const outcome : IUser2 = {
      slackUsername: "Adeosun Deji",
      operation_type,
      result
    };
    return res.json(outcome);
  } catch (error) {
    return errorResponse(res, 500, "serve error");
  }
});

app.use((req, res) => res.status(404).send({
  status: "error",
  error: "Not found",
  message: "Incorrect route .",
}));

app.listen(2000, () => {
  console.log("listening on port 2000");
});
