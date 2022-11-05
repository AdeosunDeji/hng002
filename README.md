# hng002
Task Description
• Using the same server setup from stage one.

• Create an (POST) api endoint that takes the following sample json:

- { “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }

-
  • Operation can either be addition, subtraction or mutiplication.
  • x can be a number and Integer datatype.
  • y can be a number and Integer datatype.
• Based on the operation sent, perform a simple arithmetic operation on x and y.

• Return a response with the result of the operation and your slack username.

- • { “slackUsername”: String, "operation_type" : Enum. value, “result”: Integer }.
• Push to GitHub.

- • Sample Input { “operation_type”: Enum <addition | subtraction | multiplication> , “x”: Integer, “y”: Integer }
- • Sample Response Format { “slackUsername”: String, “result”: Integer, “operation_type”: Enum.value }
How to run the code
• Install the latest version of node.

• Pull this repo and run npm install via the terminal.

• Run npm start via the terminal to start the script, the script is also live on https://hng002.onrender.com
