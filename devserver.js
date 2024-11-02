const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

// webpack config
const config = require('./config')();

const app = express();
const port = process.env.PORT || 3000;

app.use(webpackDevMiddleware(webpack(config)));

app.use(express.static('dist'));

app.use((req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Serving Static Files Example</title>
      <meta charset="UTF-8">
      <script src="/main.js"></script>
    </head>
    <body>
      <div>Hello World</div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`server is up at ${port}`);
});
