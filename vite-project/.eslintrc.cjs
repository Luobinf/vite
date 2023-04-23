module.exports = {
  // 运行环境
  env: {
    browser: true,
    es2021: true
  },
  //  全局变量：业务代码中引入的第三方库声明文件，"writable"或者 true，表示变量可重写；"readonly"或者false，表示变量不可重写；"off"，表示禁用该全局变量。
  globals: {
    $: false
  },
  // 开启插件中的继承规则以进行代码检查
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off'
  }
};
