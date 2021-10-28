import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import { styled } from 'stitches.config';

export const Container = styled('View', {
  paddingHorizontal: 20,
  paddingBottom: isIphoneX() ? getBottomSpace() : 24,

  variants: {
    withBackgroundColor: {
      true: {
        backgroundColor: '$blackTertiary',
      },
    },
  },
});

export const TextInput = styled('TextInput', {
  height: 104,
  fontSize: 15,
  fontFamily: '$regular',
  color: '$grayPrimary',
  lineHeight: 24,

  paddingTop: 16,

  marginTop: 8,
  marginBottom: 16,
});

export const ButtonText = styled('Text', {
  fontSize: 14,
  lineHeight: 20,
  marginLeft: 12,
  fontFamily: '$bold',
  color: '$white',
  textTransform: 'uppercase',
});
