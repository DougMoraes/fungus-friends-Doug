module.exports = {
  preset: 'jest-expo',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './node_modules/jest-expo/src/preset/setup.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__utils__/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|react-redux|expo-checkbox|expo(nent)?|expo-modules-core|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)"

  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
