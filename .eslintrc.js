module.exports = {
  root: true,  // Indica que esta es la configuración raíz del monorepo

  // Configuraciones básicas que se aplicarán a todo el monorepo
  env: {
    es2021: true,
    node: true,
  },

  // Extendemos configuraciones base que son comunes a todo el proyecto
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  // Plugins que serán utilizados en todo el monorepo
  plugins: ['@typescript-eslint'],

  // Reglas base que queremos aplicar a todos los proyectos
  rules: {
    // Reglas de estilo base
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-spacing': 'error',
    'space-infix-ops': 'error',

    // Reglas TypeScript
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },

  // Configuración para ignorar ciertos archivos en todo el monorepo
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '*.config.js',
    '.eslintrc.js',
  ],

  // Configuraciones que serán heredadas por los subproyectos
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
};