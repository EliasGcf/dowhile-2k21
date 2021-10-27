import {
  getStatusBarHeight,
  getBottomSpace,
  isIphoneX,
} from 'react-native-iphone-x-helper';

import { styled } from 'stitches.config';

import { Header } from '@components/Header';

export const Container = styled('View', {
  flex: 1,
  paddingHorizontal: 20,
  justifyContent: 'space-between',
  backgroundColor: '$blackSecondary',
  paddingTop: getStatusBarHeight() + 24,
  paddingBottom: isIphoneX() ? getBottomSpace() : 24,
});

export const HomeHeader = styled(Header, {
  paddingRight: 4,
});

export const SignInButtonText = styled('Text', {
  fontSize: 14,
  lineHeight: 20,
  marginLeft: 12,
  fontFamily: '$bold',
  color: '$blackPrimary',
  textTransform: 'uppercase',
});
