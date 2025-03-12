export default [
  {
    extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": ["error"],
      "react/react-in-jsx-scope": "off"
    }
  }
];
