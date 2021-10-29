import { styled } from 'stitches.config';

export const Container = styled('View', {});

export const MessageText = styled('Text', {
  fontSize: 15,
  fontFamily: '$regular',
  color: '$grayTertiary',
  lineHeight: 24,
});

export const UserInfo = styled('View', {
  marginTop: 12,
  flexDirection: 'row',
  alignItems: 'center',
});

export const UserName = styled('Text', {
  marginLeft: 16,
  color: '$grayTertiary',
  fontSize: 15,
  lineHeight: 24,
  fontFamily: '$regular',
});
