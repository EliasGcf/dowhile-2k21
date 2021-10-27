import { styled } from 'stitches.config';

export const Button = styled('TouchableOpacity', {
  height: 48,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$pink',
      },

      secondary: {
        backgroundColor: '$yellow',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
