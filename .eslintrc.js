module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: [2, "always"],
        indent: [0, 4, { SwitchCase: 1 }],
        "no-unused-vars": "error",
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "multiline-ternary": ["off"],
        "react/display-name": "off",
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ],
        "no-unused-expressions": [
            "error",
            { allowShortCircuit: false, allowTernary: false }
        ]
    }
};
