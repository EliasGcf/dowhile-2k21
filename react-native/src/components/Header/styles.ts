import { styled } from 'stitches.config';

export const Row = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
});

export const Container = styled('View', {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const LogoutButton = styled('TouchableOpacity', {
  marginRight: 20,
});

export const LogoutButtonText = styled('Text', {
  fontSize: 15,
  color: '$grayTertiary',
  fontFamily: '$regular',
});
