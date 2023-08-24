// webpack.config.js
module.exports = {
  // 기존 설정들...
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /node_modules/, // 기존의 exclude 설정
          /node_modules\/html5-qrcode\/.*/, // html5-qrcode 관련 경고를 무시하기 위한 추가 설정
        ],
      },
    ],
  },
  // 기존 설정들...
};
