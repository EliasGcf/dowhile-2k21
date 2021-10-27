import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'stitches.config';

export const AvatarGradient = styled(LinearGradient, {
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    size: {
      small: {
        width: 32,
        height: 32,
        padding: 1.5,
        borderRadius: 16,
      },

      normal: {
        width: 48,
        height: 48,
        padding: 2,
        borderRadius: 24,
      },
    },
  },

  defaultVariants: {
    size: 'normal',
  },
});

export const AvatarBorder = styled('View', {
  backgroundColor: '$blackSecondary',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '100%',
  borderRadius: 999,
});

export const AvatarImg = styled('Image', {
  variants: {
    size: {
      small: {
        width: 24,
        height: 24,
        borderRadius: 12,
      },

      normal: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
    },
  },

  defaultVariants: {
    size: 'normal',
  },
});
