// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  plugins: ["simple-import-sort"],
  rules: {
    "eol-last": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
   }
};
