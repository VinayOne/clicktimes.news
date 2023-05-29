const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");

app.use(cors());
app.use("/api", routes);

// app.use(express.static(path.join(__dirname, 'dist/angular-starter/browser')));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'dist/angular-starter/browser', 'index.html'));
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Application listening on port ${port}`)
})

