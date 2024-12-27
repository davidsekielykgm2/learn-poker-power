const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

// Definimos las rutas importantes
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

// Obtenemos la configuración base de Expo
const config = getDefaultConfig(projectRoot);

// 1. Configuramos las rutas de búsqueda de módulos
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// 2. Agregamos el directorio raíz del workspace a las carpetas observadas
config.watchFolders = [workspaceRoot];

// 3. Configuramos las extensiones de archivo que Metro debe buscar
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  'mjs',
  'cjs'
];

// 4. Configuramos symlinks para que funcionen correctamente
config.resolver.disableHierarchicalLookup = true;
config.resolver.unstable_enableSymlinks = true;

module.exports = config;