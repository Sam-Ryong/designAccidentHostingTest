const express = require('express');
const app = express();
const Globalrouter = require('./router/Globalrouter');

app.use('/',Globalrouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});