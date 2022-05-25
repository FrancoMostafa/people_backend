const config = {
  appConfig: {
    port: process.env.APP_PORT || 8080,
    host: process.env.APP_HOST || "0.0.0.0",
  },
  dbConfig: {
    mongoUri: process.env.MONGODB_URI,
  },
};

module.exports = config;
