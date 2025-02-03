module.exports = {
    env: {
        node: true,
        es6: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        'prettier/prettier': 'error',
    },
};
