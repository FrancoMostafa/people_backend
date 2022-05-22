const config = {
  appConfig: {
    port: process.env.APP_PORT || 8080,
    host: process.env.APP_HOST || "0.0.0.0",
  },
  dbConfig: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
  },
};

module.exports = config;
