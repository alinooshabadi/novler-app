/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const MetroConfig = require('@ui-kitten/metro-config');

const evaConfig = {
  evaPackage: '@eva-design/eva',
  customMappingPath: './mapping.json',
};

module.exports = MetroConfig.create(evaConfig, {
  resolver: {
    /* resolver options */
    sourceExts: ['jsx', 'js', 'ts', 'tsx'] // add tsx if its not yet defined
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
});