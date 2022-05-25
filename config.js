const config = {
  appConfig: {
    port: process.env.PORT || 5000,
    host: process.env.APP_HOST || "0.0.0.0",
  },
  dbConfig: {
    mongoUri: process.env.MONGODB_URI,
  },
};

module.exports = config;
