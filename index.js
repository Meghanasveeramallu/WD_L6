const app = require("./app");
const port = process.env.PORT || 3000;
//opening a web page in a specified port number
app.listen(port, () => {
  console.log(`server listening at port - ${port}`);
});
