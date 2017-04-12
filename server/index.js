const dotenv = require('dotenv').config();

const path = require('path');
const axios = require('axios');
const webpack = require('webpack');
const express = require('express');
const bodyParser = require('body-parser');
const historyApiFallback = require('connect-history-api-fallback');
const WepackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const WebpackDevConfig = require('./webpack/webpack.development.config.js');

const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', function(req, res) {
    res.json({ message: 'Hi, welcome to the server api!' });
});

app.get('/api/darksky', function(req, res) {
    const ROOT_WEATHER_URL = `https://api.darksky.net/forecast/${process.env.WEATHER_API}`;

    try {
        const coordinates = `${req.query.lat},${req.query.lng}`;
        const url = `${ROOT_WEATHER_URL}/${coordinates}`;

        axios.get(url)
            .then(function(response) {
                if (response.status !== 200) {
                    res.status(response.status).json({'message': 'Bad response from Dark Sky server'});
                }
                return response.data;
            })
            .then(function(payload) {
                res.status(200).json(payload);
            })
            .catch((e) => {
                return e.message;
            })
    } catch(err) {
        console.log("Errors occurs requesting Dark Sky API", err);
        res.status(500).json({'message': 'Errors occurs requesting Dark Sky API', 'details' : err});
    }
});

if (development) {
  const compiler = webpack(WebpackDevConfig);

  const middleware = WepackDevMiddleware(compiler, {
    publicPath: WebpackDevConfig.output.publicPath,
    contentBase: path.resolve(process.cwd(), "src/www"),
    hot: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);

  app.use(historyApiFallback({
      verbose: false
  }));

  app.use(middleware);
  app.use(WebpackHotMiddleware(compiler));
  app.get('/', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(path.resolve(process.cwd(), 'dist')));
  app.get('/', function response(req, res) {
    res.sendFile(path.join(process.cwd(), 'dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

