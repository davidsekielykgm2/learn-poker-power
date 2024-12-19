module.exports = {
  // Especificamos los entornos donde se ejecutará nuestro código
  env: {
    'react-native/react-native': true,
    es2021: true,
    node: true,
  },

  // Extendemos configuraciones base recomendadas
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],

  // Configuramos el parser para TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  // Agregamos los plugins necesarios
  plugins: ['@typescript-eslint', 'react', 'react-native'],

  // Definimos las reglas, manteniendo tus preferencias
  rules: {
    // Reglas de estilo que mantenemos de tu configuración
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-spacing': 'error',
    'space-infix-ops': 'error',

    // Reglas específicas para React Native
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': ['warn', {
      skip: ['Text']
    }],

    // Reglas para mejorar la calidad del código
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/prop-types': 'off', // Desactivamos prop-types ya que usamos TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],

    // Otras reglas
    'react/react-in-jsx-scope': 'off',
    'react-native/no-color-literals': 'warn',
    'react-native/sort-styles': ['error', 'asc'],
  },

  // Configuración de settings
  settings: {
    react: {
      version: 'detect',
    },
  },
};
