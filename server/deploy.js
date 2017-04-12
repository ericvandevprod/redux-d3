if (process.env.NODE_ENV === 'production') {
  const child_process = require('child_process');
  const path = require('path');

  const env = Object.assign({}, process.env);

  const options = {
    env: env
  };


  const webpackExec = `${path.resolve(process.cwd(), 'node_modules/.bin/webpack')}`;
  const file = `${path.resolve(__dirname, 'webpack/webpack.production.config.js')}`;
  const command = `${webpackExec} -p --config ${file}`;

  console.log('dropped in with production env');

  child_process.exec(command, options, (error, stdout, stderr) => {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}