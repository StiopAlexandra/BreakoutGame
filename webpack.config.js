const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './BreakoutGame/index.js',
    output: {
      path: __dirname + '/webpack',
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,         
                exclude: /node_modules/,        
                use: {          
                    loader: 'babel-loader'        
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './BreakoutGame/index.html'})],
    devServer:{
        contentBase: './webpack'
    }
   };
   