#!/bin/bash
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)

cat <<EOF > .eslintrc
{
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "script"
  },
  "env": {
    "browser": false,
    "node": true,
    "mocha": true
  },
  "rules": {
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "only-multiline"
    }],
    "key-spacing": [2, {
      "align": "value"
    }],
    "strict": [2, "global"],
    "valid-jsdoc": [2, {
      "requireReturn": true,
      "requireReturnType": true,
      "requireParamDescription": true,
      "requireReturnDescription": true
    }],
    "require-jsdoc": [2, {
        "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": true,
            "ClassDeclaration": true,
            "ArrowFunctionExpression": true
        }
    }]
  }
}
EOF

cat <<EOF > .eslintignore
test.js
EOF
