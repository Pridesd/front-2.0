import {
  color,
  colorPrimitive,
  fontFamily,
  fontWeight,
  pxToRem,
  radius,
  spacing,
  typography,
  zIndex,
} from './tokens';

export const theme = {
  color,
  colorPrimitive,
  fontFamily,
  fontWeight,
  pxToRem,
  radius,
  spacing,
  typography,
  zIndex,
} as const;

export type AppTheme = typeof theme;
