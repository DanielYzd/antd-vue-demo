module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'never'], //强制不使用分号结尾
    eqeqeq: ['error', 'always'], // 强制在任何情况下都使用 === 和 !==
    'brace-style': ['error', '1tbs', { allowSingleLine: true }] //强制在代码块中使用一致的大括号风格
  }
}
