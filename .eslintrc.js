module.exports = {
    'extends': 'eslint:recommended',
    'rules': {
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'max-len': ["error", 80],
        "complexity": ["error", 9],
        "camelcase": ["error", {
            "properties": "always"
        }],
        "new-cap": ["error", {
            "capIsNew": true,
            "newIsCap": true,
            "capIsNewExceptions": [
                "Resource", "ObjectId", "Router"
            ]
        }],
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 3
        }],
        "prefer-const": ["error", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false
        }],
        "for-direction": ["off"]
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    'env': {
        'node': true,
        'es6': true,
        'jest/globals': true
    },
    'plugins': [ 'jest' ]
}
