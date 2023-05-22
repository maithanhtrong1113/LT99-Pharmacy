const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "http://kl-env.eba-eyz5qutv.ap-southeast-1.elasticbeanstalk.com/api/:path*", // Thay thế bằng URL của nguồn dữ liệu HTTP
      },
    ];
  },
  async serverMiddleware() {
    const proxy = createProxyMiddleware("/api", {
      target: "http://kl-env.eba-eyz5qutv.ap-southeast-1.elasticbeanstalk.com", // Thay thế bằng URL của nguồn dữ liệu HTTP
      changeOrigin: true,
      secure: false,
      ws: true,
    });

    return [
      {
        path: "/api",
        handler: proxy,
      },
    ];
  },
};
