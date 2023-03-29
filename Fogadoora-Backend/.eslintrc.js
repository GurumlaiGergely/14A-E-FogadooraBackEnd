module.exports = {
    // https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project
    // https://eslint.org/docs/rules/
    // https://github.com/prettier/eslint-plugin-prettier#readme
    // https://github.com/prettier/eslint-config-prettier
    root: true,
    env: {
        node: true,
    },
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    ignorePatterns: ["./node_modules/**", "./dist/**"],
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ["simple-import-sort"],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        // "space-before-function-paren": ["error", "never"],
        // "no-return-assign": "off",
        // "unicode-bom": ["error", "never"],
        // "arrow-parens": ["error", "as-needed"],
        // "@typescript-eslint/no-inferrable-types": "off",
        // "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
            env: {
                jest: true,
            },
        },
    ],
};
