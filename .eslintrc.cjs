/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-unused-components': 'off',
    'no-unused-vars': 'off',
    'no-async-promise-executor': 'off',
    'no-useless-escape': 'off',
    'no-redeclare': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
  }
}
