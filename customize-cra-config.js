import { override, fixBabelImports, overrideDevServer } from 'customize-cra';

const supportMjs = () => webpackConfig => {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    loader: 'css-loader',
    options: {
      modules: true, // must add this
    },
    // type: 'javascript/auto',
  });
  return webpackConfig;
};

const devServerConfig = () => config => {
  return {
    ...config,
    port: 3000,
    watchOptions: {
      ignored: /^(?!E:\/sovware\/apps\/hrm\-app\/src\/).+\/public\//g,
    },
    proxy: {
      '/app/v1': {
        target: 'http://localhost:3005',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/app/v1': '/app/v1',
        },
        secure: false,
      },
    },
  };
};

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
      modules: true,
      options: {
        modules: true, // must add this
      },
      test: /\.css$/,
      loaders: ['style-loader', 'less-loader', 'css-loader?modules'],
    }),
    supportMjs(),
  ),
  devServer: overrideDevServer(devServerConfig()),
};
