module.exports = {
    env: {
        es6: true,
        // es2020: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    globals: {
        Atomicas: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    },
};
