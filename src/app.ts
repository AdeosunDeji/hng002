import express from "express";
import cors from "cors";
import { errorResponse, handleError, } from "./utils/responses";
import {
  AOP, IUser, IUser2, operation
} from "./utils/interface";

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
    let { x, y, operation_type }: AOP = req.body;
    if (!operation_type && !x && !y) {
      return errorResponse(res, 400, "Invalid inputs");
    }
    x = Number(x);
    x = Number(y);
    const addition = ["addition", "sum", "add", "plus", "summation", "altogether", "together", "total", "increase"];
    const subtraction = ["subtraction", "minus", "subtract", "decrease", "discount", "diminution", "subduction", "difference"];
    const multiplication = ["multiplication", "product", "multiply", "times"];
    const opArray = operation_type.split(" ");
    // console.log(opArray);
    // eslint-disable-next-line array-callback-return
    const opNumbers = opArray.filter((num) => {
      if (parseInt(num, 10) && typeof parseInt(num, 10) === "number") {
        return num;
      }
    });
    x = parseInt(opNumbers[0], 10);
    y = parseInt(opNumbers[1], 10);
    let result;
    for (let i = 0; i < addition.length; i++) {
      if (opArray.includes(addition[i])) {
        operation_type = operation.addition;
        result = x + y;
      }
    }
    for (let i = 0; i < subtraction.length; i++) {
      if (opArray.includes(subtraction[i])) {
        operation_type = operation.subtraction;
        result = x - y;
      }
    }
    for (let i = 0; i < multiplication.length; i++) {
      if (opArray.includes(multiplication[i])) {
        operation_type = operation.multiplication;
        result = x * y;
      }
    }
    const outcome: IUser2 = {
      slackUsername: "Adeosun Deji",
      operation_type,
      result
    };
    return res.json(outcome);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, "Server error");
  }
});

// Global 404 error handler
app.use((req, res) => res.status(404).send({
  status: "error",
  error: "Not found",
  message: "Route not correct kindly check url.",
}));

app.listen(2000, () => {
  console.log("listening on port 2000");
});
