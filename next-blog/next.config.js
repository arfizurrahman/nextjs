const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "arfiz",
        mongodb_password: "dNXnYugNlcu7Bm6T",
        mongodb_clustername: "cluster0",
        mongodb_database: "next-blog",
      },
    };
  }
  return {
    env: {
      mongodb_username: "arfiz",
      mongodb_password: "dNXnYugNlcu7Bm6T",
      mongodb_clustername: "cluster0",
      mongodb_database: "next-blog",
    },
  };
};
