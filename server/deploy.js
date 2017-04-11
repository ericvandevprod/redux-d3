if (process.env.NODE_ENV === 'production') {
  const dotenv = require('dotenv').config();
  const child_process = require('child_process');
  const path = require('path');
  const _ = require('lodash');
  const env = _.pick(process.env, ['NODE_ENV', 'WEATHER_API']);

  const options = Object.create(process.env);

  options.env = {
    NODE_ENV: process.env.NODE_ENV,
    WEATHER_API: process.env.WEATHER_API
  };

  const executable = `${path.resolve(process.cwd(), 'node_modules/.bin/webpack')} -p --config `;
  const arg = `${path.resolve(__dirname, '../server/webpack/webpack.production.config.js')}`;

  child_process.exec(executable + arg, options, (error, stdout, stderr) => {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}