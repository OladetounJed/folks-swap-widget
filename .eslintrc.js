module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config`
  extends: ["swap"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
