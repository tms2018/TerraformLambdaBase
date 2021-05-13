const path = require('path');
const fs = require('fs');

const buildEntry = () => {
  const ignoredFolders = ['types', 'shared'];
  return fs
    .readdirSync(path.resolve(__dirname, 'src'))
    .filter((dirname) => !ignoredFolders.includes(dirname) && fs.lstatSync(`./src/${dirname}`).isDirectory())
    .reduce(
      (entry, dirname) =>
        Object.assign(entry, {
          [dirname]: `./src/${dirname}/index.ts`
        }),
      {}
    );
};

module.exports = {
  entry: buildEntry(),

  // Write the output to the dist/{lambdaname} folder
  output: {
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2',
    path: path.resolve('.', 'dist')
  },

  // Create source maps
  devtool: 'source-map',

  // Resolve .ts and .js extensions
  resolve: {
    extensions: ['.ts', '.js']
  },

  // Target node
  target: 'node',

  // Exclude aws-sdk from build packages since it's included in lambda runtime
  externals: ['aws-sdk'],

  // Set the webpack mode to development unless otherwise specified
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',

  // Add the TypeScript loader
  module: {
    rules: [{test: /\.tsx?$/, loader: 'ts-loader'}]
  }
};
