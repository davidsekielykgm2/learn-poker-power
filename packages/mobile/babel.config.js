module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Configuración de decoradores en modo legacy
      // Este modo es el más compatible con librerías como MobX y class-validator
      ['@babel/plugin-proposal-decorators', { legacy: true }],

      // Transformaciones de clase con modo loose habilitado
      // Estas deben ir DESPUÉS de los decoradores
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],

      // Configuración para resolver rutas en el monorepo
      ['module-resolver', {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@learn-poker-power': '../../packages'
        },
      }]
    ],
  };
};