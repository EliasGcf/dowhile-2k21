import {
  getStatusBarHeight,
  getBottomSpace,
  isIphoneX,
} from 'react-native-iphone-x-helper';

import { styled } from 'stitches.config';

import { Header } from '@components/Header';

export const Container = styled('View', {
  flex: 1,
  backgroundColor: '$blackSecondary',
  paddingTop: getStatusBarHeight() + 24,
});

export const Main = styled('View', {
  flex: 1,
  paddingHorizontal: 20,
});

export const HomeHeader = styled(Header, {
  paddingRight: 4,
});
