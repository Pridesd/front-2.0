import {
  color,
  colorPrimitive,
  fontFamily,
  fontWeight,
  pxToRem,
  radius,
  spacing,
  typography,
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
} as const;

export type AppTheme = typeof theme;
