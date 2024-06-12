module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components/index',
          '@navigation': './src/navigation',
          '@screens': './src/screens/index',
          '@uiKit': './src/uiKit/index',
        },
        root: ['./src'],
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
