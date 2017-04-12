const path = require('path');
const webpack = require('webpack');
const express = require('express');
const WepackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');

const WebpackDevConfig = require('./webpack/webpack.development.config.js');


const development = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;
const app = express();

if (development) {
  const compiler = webpack(WebpackDevConfig);
  const middleware = WepackDevMiddleware(compiler, {
    publicPath: WebpackDevConfig.output.publicPath,
    contentBase: path.resolve(process.cwd(), "src/www"),
    hot: true,
    historyApiFallback: true,
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
  app.use(WebpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(path.resolve(process.cwd(), 'dist')));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(process.cwd(), 'dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

