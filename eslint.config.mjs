import globals from "globals";
import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-node";
import pluginSecurity from "eslint-plugin-security";
import pluginUnicorn from "eslint-plugin-unicorn";
import pluginPromise from "eslint-plugin-promise";
import pluginImport from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        globals: {
          ...globals.browser,
          ...globals.node
        },
    },
  },
  {
    plugins: {
      eslint: pluginJs,
      node: pluginNode,
      security: pluginSecurity,
      unicorn: pluginUnicorn,
      promise: pluginPromise,
      import: pluginImport,
      prettier: prettier
    },
  },
  {
    rules: {
      "no-restricted-syntax": [
        "error", 
        "ForInStatement"
      ],
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
