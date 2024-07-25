import path from 'path';
import url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: {
    app: './index.tsx',
  },
  output: {
    filename: '[name].[chunkhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      scriptLoading: 'blocking',
    }),
    new ESLintWebpackPlugin({
      extensions: ['js','jsx','ts','tsx'],
      exclude: ['node_modules'],
      formatter: 'stylish',
      emitWarning: true,
      failOnWarning: false, // No fallar en advertencias
      failOnError: false, // No fallar en errores
      overrideConfig: {
        "extends": [
          "eslint:recommended",
          "plugin:react/recommended",
          "plugin:@typescript-eslint/recommended",
          "plugin:react-hooks/recommended"],
        "rules": {}
      }
    })
  ],
};
