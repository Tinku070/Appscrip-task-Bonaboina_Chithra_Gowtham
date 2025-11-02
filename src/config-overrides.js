const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    util: require.resolve("util/"),
    path: require.resolve("path-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert/"),
    zlib: require.resolve("browserify-zlib"),
    querystring: require.resolve("querystring-es3"),
    https: require.resolve("https-browserify"),
    http: require.resolve("stream-http"),
    url: require.resolve("url/"),
  };
  return config;
};
