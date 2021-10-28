import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import { styled } from 'stitches.config';

export const Container = styled('View', {
  paddingHorizontal: 20,
  paddingBottom: isIphoneX() ? getBottomSpace() : 24,
});

export const SignInButtonText = styled('Text', {
  fontSize: 14,
  lineHeight: 20,
  marginLeft: 12,
  fontFamily: '$bold',
  color: '$blackPrimary',
  textTransform: 'uppercase',
});
