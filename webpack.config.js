const path = require('path');
const fs = require('fs');

const entryFiles = {};
const rootDir = './src/roots/';
fs.readdirSync(rootDir).forEach((file) => {
    if (file.endsWith('.jsx')) {
        const name = path.parse(file).name; // Use the file name (without extension) as the entry name
        entryFiles[name] = path.resolve(rootDir, file);
    }
});

module.exports = {
    entry: entryFiles,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader', // For Tailwind and other PostCSS plugins
                ],
              },
        ],
    }
}
