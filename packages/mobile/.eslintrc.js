module.exports = {
  // Extendemos la configuración raíz y agregamos las específicas de React/React Native
  extends: [
    '../../.eslintrc.js',  // Extendemos la configuración base del monorepo
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],

  // Configuración específica para React Native
  env: {
    'react-native/react-native': true,
  },

  // Agregamos los plugins necesarios para React y React Native
  plugins: ['react', 'react-native'],

  // Configuración del parser para el proyecto mobile
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  // Reglas específicas para el proyecto mobile
  rules: {
    // Reglas de React Native
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': ['warn', {
      skip: ['Text']
    }],
    'react-native/no-color-literals': 'warn',
    'react-native/sort-styles': ['error', 'asc'],

    // Reglas de React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',  // Desactivado porque usamos TypeScript
  },

  // Configuración específica para React
  settings: {
    react: {
      version: 'detect',
    },
  },
};