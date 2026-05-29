const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  'expo-env': require.resolve('./expo-env.js'),
};

module.exports = config;