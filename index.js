const app = require("./app");
const port = process.env.PORT || 8742;
app.listen(port, () => {
  console.log(`Started express server at port 3000- ${port}`);
});
