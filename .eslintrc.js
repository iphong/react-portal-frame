const path = require('path')
module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: true
    },
    globals: {
        Promise: 1
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
    },
    extends: [ 'prettier'],
    plugins: ['react', 'import', 'prettier'],
    rules: {
        'semi': 0,
        'strict': 1,
        'indent': 0,
        'no-undef':1,
        'no-fallthrough':1,
        'no-tabs': 0,
        'camelcase': 0,
        'comma-dangle': 1,
        'consistent-return': 0,
        'eqeqeq': 1,
        'no-underscore-dangle': 0,
        'no-shadow': 1,
        'no-plusplus': 0,
        'no-undef': 1,
        'no-unreachable': 1,
        'max-len': 0,
        'no-console': 0,
        'padded-blocks': 0,
        'no-trailing-spaces': 1,
        'space-in-parens': 1,
        'arrow-parens': 0,
        'no-param-reassign': 0,
        'no-unused-vars': 0, // <- This show react components variables as unused. turn off temporarily
        'no-unused-prop-types': 0,
        'no-unused-expressions': 0, // <-- For quick function calls with expression. Eg. `this.foo && this.bar()`
        'object-curly-spacing': 0,
        'global-require': 1,
        'class-methods-use-this': 0, // <- Some of element classes have prototype methods that doesn't use this
        'one-var': 0,
        'brace-style': 1,
        'one-var-declaration-per-line': 1,
        'prefer-template': 1,
        'import/first': 1,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'import/newline-after-import': 1,
        'prettier/prettier': [
            1,
            { singleQuote: true, tabWidth: 4, useTabs: true, semi: false }
        ],
        'prefer-const': 1,
        'react/jsx-filename-extension': 0,
        'react/react-in-jsx-scope': 0,
        'react/no-string-refs': 1,
        'react/prefer-es6-class': 1,
        'react/sort-comp': 1,
        'react/prop-types': 1,
        'react/jsx-tag-spacing': 1,
        'react/jsx-pascal-case': 0,
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-closing-bracket-location': 0,
        'react/prefer-stateless-function': 0,
        'prefer-rest-params': 1,
        'no-nested-ternary': 0,
        'react/jsx-wrap-multilines': 0,
        'no-useless-constructor': 1,
        radix: 1,
        'no-useless-escape': 1,
        'no-eval': 1,
        'vars-on-top': 1,
        'no-var': 1,
        'no-irregular-whitespace': 1,
        'no-multi-assign': 0, // <-- why not? eg. this.foo = this.bar = 'value'
        'react/no-multi-comp': 0,
        'react/no-children-prop': 0,
        'react/no-unused-prop-types': 0,
        'no-empty': 1,
        'default-case': 0, // <-- It is ok not to have default case
        'react/require-default-props': 0,
        'no-case-declarations': 0,
        'guard-for-in': 1,
        'no-restricted-syntax': 1,
        'no-throw-literal': 1,
        'no-constant-condition': 1
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: path.resolve(__dirname, './webpack.config.js')
            }
        }
    }
}
