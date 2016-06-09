var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main.jsx',
      Nav: 'app/components/nav.jsx',
      Weather: 'app/components/weather.jsx',
      About: 'app/components/about.jsx',
      Examples: 'app/components/examples.jsx',
      WeatherForm: 'app/components/weatherform.jsx',
      WeatherMessage: 'app/components/weathermessage.jsx',
      OpenWeatherMap: 'app/api/openweathermap.jsx',
      ErrorModal: 'app/components/errorModal.jsx',
      applicationStyles: 'app/styles/app.css'
    },
    extension: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
