import { createStitches } from 'stitches-native';

export const {
  styled,
  config: { theme },
} = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      green: '#1b873f',
      pink: '#ff008e',
      orange: '#ff7a29',
      yellow: '#ffcd1e',

      blackPrimary: '#09090a',
      blackSecondary: '#121214',
      blackTertiary: '#202024',

      grayPrimary: '#8d8d99',
      graySecondary: '#c4c4cc',
      grayTertiary: '#e1e1e6',
      grayQuaternary: '#29292e',
    },
    fonts: {
      regular: 'Roboto_400Regular',
      bold: 'Roboto_700Bold',
    },
  },
});
