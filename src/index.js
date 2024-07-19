const app = require("./app");
require('dotenv').config();

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`app listen on port ${port}`);

});
